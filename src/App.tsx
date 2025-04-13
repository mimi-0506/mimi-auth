import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, provider } from "./firebase";

export default function App() {
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const idToken = credential?.idToken;

      if (!idToken) {
        console.error("❌ Google ID Token을 가져올 수 없습니다.");
        return;
      }

      window.location.href = `mimi://auth?token=${idToken}`;
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
