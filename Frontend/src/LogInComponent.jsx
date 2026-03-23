import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [savedUsername, setSavedUsername] = useState("Guest");

    const url = "http://localhost:8080/auth/login";

    useEffect(() => {
        const saved = localStorage.getItem("username");
        if (saved) {
            setSavedUsername(saved);
        }
    }, []);

    async function signUp(e) {
        e.preventDefault();

        try {
            const params = new URLSearchParams({ username, password });
            const response = await fetch(`${url}?${params.toString()}`, {
                method: "POST"
            });

            const data = await response.json();
            console.log(data);

            localStorage.setItem("token", data.token);
            localStorage.setItem("username", data.username);

            setSavedUsername(data.username);

        } catch (error) {
            console.error("Error:", error);
        }
    }

    return (
  <div className="sign-up">
    <h1>Login</h1>

    <form onSubmit={signUp}>
      
      <div className="inputGroup">
        <input
          type="text"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Username</label>
      </div>

      <div className="inputGroup">
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>Password</label>
      </div>

      <button type="submit">Log In</button>

      <Link to="/sign-up">
        Don't have an account? <span>Sign up</span>
      </Link>
      
    </form>
  </div>
);
}