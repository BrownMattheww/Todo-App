import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";



export default function CreateToDo(){
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [date, setDate] = useState("")
    const navigate = useNavigate();

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

        if (!response.ok) {
            console.error("Request failed:", response.status, response.statusText);
            return;
        }

        const data = await response.json();
        console.log(data);

        setTitle("")
        setDescription("")
        setDate("")
        navigate("/todos")

    } catch(error) {
        console.error("Error:", error);
    }
}

   return (

    <>

    <Navbar /> 

    <div className="sign-up">
      <h1>Create To Do</h1>

      <form onSubmit={sendPayload}>
        
        <div className="inputGroup">
          <input
            type="text"
            name="title"
            required
            placeholder=" "
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label>Title</label>
        </div>

        <div className="inputGroup">
          <input
            type="datetime-local"
            name="date"
            required
            placeholder=" "
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <label>Complete By</label>
        </div>

        <div className="inputGroup">
          <input
            type="text"
            name="description"
            placeholder=" "
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <label>Description</label>
        </div>

        <button type="submit">Create Task</button>
      </form>
    </div>
    </>
  );
}