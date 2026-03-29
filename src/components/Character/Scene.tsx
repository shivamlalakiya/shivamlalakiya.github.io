import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import setCharacter from "./utils/character";
import setLighting from "./utils/lighting";
import { useLoading } from "../../context/LoadingProvider";
import handleResize from "./utils/resizeUtils";
import {
  handleMouseMove,
  handleTouchEnd,
  handleHeadRotation,
  handleTouchMove,
} from "./utils/mouseUtils";
import setAnimations from "./utils/animationUtils";
import { setProgress } from "../Loading";

const Scene = () => {
  const canvasDiv = useRef<HTMLDivElement | null>(null);
  const hoverDivRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef(new THREE.Scene());
  const { setLoading } = useLoading();

  const [, setChar] = useState<THREE.Object3D | null>(null);
  useEffect(() => {
    if (canvasDiv.current) {
      let rect = canvasDiv.current.getBoundingClientRect();
      let container = { width: rect.width, height: rect.height };
      const aspect = container.width / container.height;
      const scene = sceneRef.current;

      const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
      });
      renderer.setClearColor(0x000000, 0);
      renderer.setSize(container.width, container.height);
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1;
      canvasDiv.current.appendChild(renderer.domElement);

      // Slightly wider framing for the centered landing layout.
      const camera = new THREE.PerspectiveCamera(18, aspect, 0.1, 1000);
      camera.position.set(0, 12.6, 28.5);
      camera.zoom = 1.0;
      camera.updateProjectionMatrix();

      let headBone: THREE.Object3D | null = null;
      let screenLight: any | null = null;
      let mixer: THREE.AnimationMixer;
      // Fallback: if the avatar has no head bone, rotate the whole character.
      let baseCharacterRotation = { x: 0, y: 0 };
      let characterObj: THREE.Object3D | null = null;

      const clock = new THREE.Clock();

      const light = setLighting(scene);
      let progress = setProgress((value) => setLoading(value));
      const { loadCharacter } = setCharacter(renderer, scene, camera);

      // Fail-safe: if loading is slow, let UI render anyway.
      const hardTimeout = window.setTimeout(() => {
        progress.clear();
      }, 9000);

      loadCharacter()
        .then((gltf) => {
          if (!gltf) return;
          const animations = setAnimations(gltf);
          hoverDivRef.current && animations.hover(gltf, hoverDivRef.current);
          mixer = animations.mixer;
          characterObj = gltf.scene;
          setChar(characterObj);
          scene.add(characterObj);
          baseCharacterRotation = {
            x: characterObj.rotation.x,
            y: characterObj.rotation.y,
          };
          headBone =
            characterObj.getObjectByName("Head") ||
            characterObj.getObjectByName("head") ||
            characterObj.getObjectByName("mixamorigHead") ||
            characterObj.getObjectByName("spine006") ||
            characterObj.getObjectByName("spine.006") ||
            null;
          screenLight = characterObj.getObjectByName("screenlight") || null;
          progress.loaded().then(() => {
            window.clearTimeout(hardTimeout);
            setTimeout(() => {
              light.turnOnLights();
              animations.startIntro();
            }, 2500);
          });
          window.addEventListener("resize", () =>
            handleResize(renderer, camera, canvasDiv, characterObj!)
          );
        })
        .catch((err) => {
          console.error("Character load failed:", err);
          window.clearTimeout(hardTimeout);
          progress.clear();
        });

      let mouse = { x: 0, y: 0 },
        interpolation = { x: 0.1, y: 0.2 };

      const onMouseMove = (event: MouseEvent) => {
        handleMouseMove(event, (x, y) => (mouse = { x, y }));
      };
      let debounce: number | undefined;
      const onTouchStart = (event: TouchEvent) => {
        const element = event.target as HTMLElement;
        debounce = setTimeout(() => {
          element?.addEventListener("touchmove", (e: TouchEvent) =>
            handleTouchMove(e, (x, y) => (mouse = { x, y }))
          );
        }, 200);
      };

      const onTouchEnd = () => {
        handleTouchEnd((x, y, interpolationX, interpolationY) => {
          mouse = { x, y };
          interpolation = { x: interpolationX, y: interpolationY };
        });
      };

      document.addEventListener("mousemove", (event) => {
        onMouseMove(event);
      });
      const landingDiv = document.getElementById("landingDiv");
      if (landingDiv) {
        landingDiv.addEventListener("touchstart", onTouchStart);
        landingDiv.addEventListener("touchend", onTouchEnd);
      }
      const animate = () => {
        requestAnimationFrame(animate);
        if (headBone) {
          handleHeadRotation(
            headBone,
            mouse.x,
            mouse.y,
            interpolation.x,
            interpolation.y,
            THREE.MathUtils.lerp
          );
          light.setPointLight(screenLight);
        } else if (characterObj) {
          // Map cursor/touch to a gentle whole-body "look" rotation.
          const targetY = THREE.MathUtils.clamp(mouse.x * 0.6, -0.6, 0.6);
          const targetX = THREE.MathUtils.clamp(-mouse.y * 0.18, -0.22, 0.22);
          characterObj.rotation.y = THREE.MathUtils.lerp(
            characterObj.rotation.y,
            baseCharacterRotation.y + targetY,
            0.08
          );
          characterObj.rotation.x = THREE.MathUtils.lerp(
            characterObj.rotation.x,
            baseCharacterRotation.x + targetX,
            0.08
          );
        }
        const delta = clock.getDelta();
        if (mixer) {
          mixer.update(delta);
        }
        renderer.render(scene, camera);
      };
      animate();
      return () => {
        clearTimeout(debounce);
        scene.clear();
        renderer.dispose();
        window.removeEventListener("resize", () =>
          handleResize(renderer, camera, canvasDiv, characterObj!)
        );
        if (canvasDiv.current) {
          canvasDiv.current.removeChild(renderer.domElement);
        }
        if (landingDiv) {
          document.removeEventListener("mousemove", onMouseMove);
          landingDiv.removeEventListener("touchstart", onTouchStart);
          landingDiv.removeEventListener("touchend", onTouchEnd);
        }
      };
    }
  }, []);

  return (
    <>
      <div className="character-container">
        <div className="character-model" ref={canvasDiv}>
          <div className="character-rim"></div>
          <div className="character-hover" ref={hoverDivRef}></div>
        </div>
      </div>
    </>
  );
};

export default Scene;
