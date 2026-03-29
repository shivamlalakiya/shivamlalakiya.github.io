import "./styles/Loading.css";
import { profile } from "../data/profile";

const SuspenseFallback = ({ label = "Loading" }: { label?: string }) => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0a0e17",
        color: "#fff",
      }}
    >
      <div style={{ textAlign: "center", opacity: 0.9 }}>
        <div style={{ fontSize: 14, letterSpacing: 2, marginBottom: 10 }}>
          {profile.initials}
        </div>
        <div style={{ fontSize: 18, fontWeight: 600 }}>{label}…</div>
        <div style={{ fontSize: 13, opacity: 0.7, marginTop: 6 }}>
          Preparing the 3D scene and UI
        </div>
      </div>
    </div>
  );
};

export default SuspenseFallback;

