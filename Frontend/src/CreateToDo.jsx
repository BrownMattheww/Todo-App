import { useState } from "react";

export default function CreateToDo(){
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [date, setDate] = useState("")

    const url = "http://localhost:8080/todo/createToDo"

    async function sendPayload(e) {
        e.preventDefault();

        if(!title){
        alert("Please ensure a title is set")
        return
        }
        if(!date){
        alert("please ensure a date is set")
        return;
        }

        try {
            const payload = {
                "title": title,
                "description": description,
                "completeBy": date
            }
            

            const token = localStorage.getItem("token");

            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(payload)
            });

            //Logging response
            const data = await response.json();
            console.log(data);

            setTitle("")
            setDescription("")
            setDate("")

        } catch(error) {
            console.error("Error:", error);
        }
    }

    return(
        <div>
            <h1>Create to do</h1>
            <form onSubmit={sendPayload}>
                <input
                    type="text" 
                    name="title" 
                    id="title" 
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}/>

                <input 
                    type="date" 
                    name="date" 
                    id="date" 
                    value={date}
                    onChange={(e) => setDate(e.target.value)}/>

                <input
                    type="text" 
                    name="description" 
                    id="description" 
                    value={description}
                    onChange={(e) => setDescription(e.target.value)} />

                <button type="submit">Submit</button>        
            </form>
        </div>
    )
}