import Navbar from "./Navbar";
import { useEffect } from "react";
import { Link } from "react-router-dom";


export default function CreateToDo(){
    useEffect(() => {
        localStorage.removeItem("username")
        localStorage.removeItem("token")
  }, []);

  return (
    <>
        <Navbar /> 
            <div className="sign-up">
            <h1>You have been logged out</h1>

            <Link to="/log-in">
                    Sign in here
                </Link>
        </div>
    </>
  );
}