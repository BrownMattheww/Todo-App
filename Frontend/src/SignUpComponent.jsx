import { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";

export default function SignUp() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const url = "http://localhost:8080/auth/signup";

    async function signUp(e) {
        e.preventDefault();

        //Error handling
        if (username.length < 6) {
        alert("Username must be at least 7 characters long");
        return;
        }
        if (password.length < 6) {
        alert("Password must be at least 7 characters long")
        return;
        }

        try {

            const params = new URLSearchParams({ username, password });
            const response = await fetch(`${url}?${params.toString()}`, {
                method: "POST"
            });

            const data = await response.json();
            console.log(data);

        } catch (error) {
            console.error("Error:", error);
        }
    }

    return (
        <div className="sign-up">
            <h1>Sign up page</h1>
            <form onSubmit={signUp}>
                {/* Username Input */}
                <div className="inputGroup">
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        autoComplete="off"
                    />
                    <label htmlFor="username">Username</label>
                </div>

                <div className="inputGroup">
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        autoComplete="off"
                    />
                    <label htmlFor="password">Password</label>
                </div>

                <button type="submit">Submit</button>

                <Link to="/log-in">
                    Sign in here
                </Link>
            </form>
        </div>
    );
}