import { useState, useEffect } from "react";
import ToDoComponent from "./ToDoComponent";
import Navbar from "./Navbar";

const UrlGetTodos = "http://localhost:8080/todo/userToDo";

export default function ToDoPage() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const token = localStorage.getItem("token");

                const response = await fetch(UrlGetTodos, {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json"
                    }
                });

                const data = await response.json();
                console.log(data);
                setTodos(data);

            } catch (error) {
                console.error("Error:", error);
            }
        };

        fetchTodos();
    }, []);

    return (
        <>
            <Navbar />
            
            <div className="sign-up">
                <h1>Todos</h1>

                {todos.map(todo => (
                    <ToDoComponent
                        key={todo.id}
                        id={todo.id}                     
                        title={todo.title}
                        description={todo.description}
                        completeBy={todo.completeBy}
                        completed={todo.completed}       
                    />
                ))}
                
                    <button id="createButton" type="submit">Create new todo</button>
            </div>
        </>
    );
}