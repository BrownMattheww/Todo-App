import SignUp from "./SignUpComponent";
import LoginComponent from "./LogInComponent";
import CreateToDo from "./CreateToDo";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/log-in" element={<LoginComponent />} />
      <Route path="/create-todo" element={<CreateToDo />} />
    </Routes>
  );
}

export default App;