import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./firebase";

export default function App() {
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const token = await result.user.getIdToken();
      console.log("token", token);

      window.location.href = `mimi://auth?token=${token}`;
    } catch (e) {
      console.error("Login failed:", e);
    }
  };

  return (
    <div>
      <h1>mimi-auth</h1>
      <button onClick={handleLogin}>구글 로그인</button>
    </div>
  );
}
