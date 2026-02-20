import { useState } from "react"

export default function SignUp() {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const url = "http://localhost:8080/auth/signup"

    async function signUp(e){
        e.preventDefault();

        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ username, password })
            });

            const data = await response.json();
            console.log(data)
        }   catch (error) {
            console.error("Error:", error);
        }
    }


    return (
        <div>
        <h1>Sign up page</h1>
            <form onSubmit={signUp}>
                <input type="text" name="Username" id="username" onChange={(e) => setUsername(e.target.value) } />
                <input type="password" name="Password" id="password" onChange={(e) => setPassword(e.target.value)}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}