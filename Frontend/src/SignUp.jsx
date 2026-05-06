import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import "./SignUp.css";

export default function SignUp() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const url = "http://localhost:8080/auth/signup";

    async function signUp(e) {
        e.preventDefault();
    
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

            if(response.ok){
                navigate("/log-in")
            } else {
                alert(data.message || "Signup failed");
            }

        } catch (error) {
            console.error("Error: ", error);
        }
    }

    return (
        <>
            <Navbar />

            <div className="sign-up">
            <h1>Sign up page</h1>
            <form onSubmit={signUp}>
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
        </>
    );
}