import { useState } from "react";
import { Link } from "react-router-dom";

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

            //Attempting logon
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
        <div>
        <h1>Sign up page</h1>
            <form onSubmit={signUp}>
                <input 
                    type="text" 
                    name="Username" 
                    id="username" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value) } />

                <input 
                    type="password" 
                    name="Password" 
                    id="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}/>

                <button type="submit">Submit</button>

                <Link to="/log-in">
                    If you already have an account, click here
                </Link>
            </form>
        </div>
    )
}