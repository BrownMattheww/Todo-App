import { useState } from "react";

export default function SignUp() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const url = "http://localhost:8080/auth/login";

    async function signUp(e) {
        e.preventDefault();

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
        <div>
        <h1>Login Page</h1>
                <form onSubmit={signUp}>
                    <input type="text" id="username" onChange={(e) => setUsername(e.target.value)}/>
                    <input type="password" id="password" onChange={(e) => setPassword(e.target.value)}/>
                    <button type="submit">Submit</button>
                </form>
        </div>
    )

}