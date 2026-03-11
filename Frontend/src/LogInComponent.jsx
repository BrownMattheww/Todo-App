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
        <div>
            <h1>Login Page</h1>
            <h2>Hello, {savedUsername}</h2>

            <form onSubmit={signUp}>
                <input 
                    type="text" 
                    id="username"  
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}/>

                <input 
                    type="password" 
                    id="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}/>

                <button type="submit">Submit</button>

                <Link to="/sign-up">
                    If you don't already have an account, click here
                </Link>
            </form>
        </div>
    );
}