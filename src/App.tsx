import { auth, provider, signInWithPopup } from "./firebase";

function App() {
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const token = await result.user.getIdToken();
      const redirectUrl = new URLSearchParams(window.location.search).get(
        "redirect"
      );
      if (redirectUrl) {
        window.location.href = `${redirectUrl}?token=${token}`;
      }
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
