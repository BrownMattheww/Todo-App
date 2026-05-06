import SignUp from "./SignUp";
import LoginComponent from "./LogIn";
import CreateToDo from "./CreateToDo";
import { Routes, Route } from "react-router-dom";
import ToDoPage from "./ToDoPage";
import ProtectedRoute from "./ProtectedRoute"
import Logout from "./Logout"

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/log-in" element={<LoginComponent />} />


      <Route 
        path="/create-todo" 
        element={
          <ProtectedRoute>
            <CreateToDo />
          </ProtectedRoute>
          } 
        />

      <Route 
        path="todos" 
        element={
          <ProtectedRoute>
            <ToDoPage />
          </ProtectedRoute>
        } 
      />

      <Route 
        path="logout" 
        element={
          <ProtectedRoute>
            <Logout />
          </ProtectedRoute>
        } 
      />
    </Routes>

    
  );
}

export default App;