import * as THREE from "three";
import { DRACOLoader, GLTF, GLTFLoader } from "three-stdlib";
import { setCharTimeline, setAllTimeline } from "../../utils/GsapScroll";

const setCharacter = (
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera
) => {
  const loader = new GLTFLoader();
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("/draco/");
  loader.setDRACOLoader(dracoLoader);

  const normalizeName = (name: string) =>
    name.toLowerCase().replace(/[^a-z0-9]/g, "");

  const retargetClipNamesByBone = (
    clips: THREE.AnimationClip[],
    targetRoot: THREE.Object3D
  ) => {
    const targetBones: Record<string, string> = {};
    targetRoot.traverse((obj: any) => {
      if (obj?.isBone && obj.name) {
        targetBones[normalizeName(obj.name)] = obj.name;
      }
    });

    return clips.map((clip) => {
      const tracks = clip.tracks.map((t) => {
        const match = t.name.match(/^(.*)\.(position|quaternion|scale)$/);
        if (!match) return t;
        const [, rawNodeName, prop] = match;
        const mapped = targetBones[normalizeName(rawNodeName)];
        if (!mapped) return t;
        const cloned = t.clone();
        cloned.name = `${mapped}.${prop}`;
        return cloned;
      });
      return new THREE.AnimationClip(clip.name, clip.duration, tracks);
    });
  };

  const loadCharacter = () => {
    return new Promise<GLTF | null>(async (resolve, reject) => {
      try {
        // 1) Load the new avatar from public root.
        const avatarUrl = "/shivam-avatar.glb";
        const avatarGltf = await new Promise<GLTF>((res, rej) => {
          loader.load(avatarUrl, res, undefined, rej);
        });

        // 2) If the new avatar has no animations, reuse the original template's
        // animation clips and best-effort remap bone track names.
        if (!avatarGltf.animations?.length) {
          try {
            // Load a pre-decrypted template GLB so we avoid WebCrypto + blob URLs on startup.
            const animGltf = await new Promise<GLTF>((res, rej) => {
              loader.load("/models/template-animations.glb?v=1", res, undefined, rej);
            });

            if (animGltf.animations?.length) {
              avatarGltf.animations = retargetClipNamesByBone(
                animGltf.animations,
                avatarGltf.scene
              );
            }
          } catch (e) {
            console.warn("Failed to load template animations; continuing.", e);
          }
        }

        const character = avatarGltf.scene;

        // Auto-scale and position the avatar to fill the camera frame.
        // Camera is at (0, 12.6, 28.5) with FOV 18°; visible Y ≈ [8.1, 17.1] at z=0.
        // A Tripo-generated mesh is ~1 unit tall centered at origin, so it needs
        // to be scaled up and repositioned to be visible.
        const bbox = new THREE.Box3().setFromObject(character);
        const modelHeight = bbox.max.y - bbox.min.y;
        if (modelHeight > 0) {
          const targetHeight = 12; // world units — matches original character framing
          const s = targetHeight / modelHeight;
          character.scale.setScalar(s);
          // Align model top to camera top (~y=17) so we see head down to ~thighs.
          character.position.y = 17 - bbox.max.y * s;
          // Center X and Z on the scene origin.
          character.position.x = -((bbox.max.x + bbox.min.x) / 2) * s;
          character.position.z = -((bbox.max.z + bbox.min.z) / 2) * s;
          // Tripo avatars face -X by default; rotate -90° around Y to face the camera (-Z).
          character.rotation.y = -Math.PI / 2;
        }

        // Kick off shader compilation, but don't block initial render/loading.
        renderer.compileAsync(character, camera, scene).catch(() => {});

        character.traverse((child: any) => {
          if (child?.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
            (child as THREE.Mesh).frustumCulled = true;
          }
        });

        resolve(avatarGltf);
        setCharTimeline(character, camera);
        setAllTimeline();

        // Optional: only if bones exist.
        const footR = character.getObjectByName("footR");
        const footL = character.getObjectByName("footL");
        if (footR && footL) {
          footR.position.y = 3.36;
          footL.position.y = 3.36;
        }

        dracoLoader.dispose();
      } catch (err) {
        reject(err);
        console.error(err);
      }
    });
  };

  return { loadCharacter };
};

export default setCharacter;
