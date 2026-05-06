import "./SignUp.css";
import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">TODO APP</h2>

      <div className="nav-links">
        <Link to="/log-in">Log in</Link>
        <Link to="/create-todo">Create Todo</Link>
        <Link to="/todos">Todos</Link>
        <Link to="/logout">Logout</Link>
      </div>
    </nav>
  );
}