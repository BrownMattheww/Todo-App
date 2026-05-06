import { useState } from 'react';
import styles from './ToDo.module.css';

export default function ToDo(props) {
    const [completed, setCompleted] = useState(props.completed || false);

    const handleCheckbox = async () => {
    const url = `http://localhost:8080/todo/${props.id}`;

    try {
        const token = localStorage.getItem("token")
        const response = await fetch(url, {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ completed: !completed })
        });

        if (!response.ok) {
            throw new Error("Failed to update todo");
        }

        setCompleted(!completed);
    } catch (error) {
        console.error("Error updating todo:", error);
        alert("Could not update todo. Please try again.");
    }
};

    return (
        <div className={styles['todo-card']}>
            <h1>{props.title}</h1>
            <h2>{props.description}</h2>
            <p>{props.completeBy}</p>

            <div className={styles['checkbox-group']}>
                <input 
                    type="checkbox" 
                    checked={completed} 
                    onChange={handleCheckbox} 
                    id={`todo-${props.id}`} 
                />
                <label htmlFor={`todo-${props.id}`}>
                    {completed ? 'Completed' : 'Mark as complete'}
                </label>
            </div>
        </div>
    );
}