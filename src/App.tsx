import { signInWithRedirect } from "firebase/auth";
import { auth, provider } from "./firebase";

function App() {
  const handleLogin = async () => {
    try {
      signInWithRedirect(auth, provider);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h1>mimi-auth</h1>
      <button onClick={handleLogin}>구글 로그인</button>
    </div>
  );
}

export default App;
