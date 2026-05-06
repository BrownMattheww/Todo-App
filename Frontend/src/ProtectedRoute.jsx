import { jwtDecode } from "jwt-decode";
import { Navigate } from "react-router-dom";

const isTokenValid = (token) => {
  try {
    const decoded = jwtDecode(token);
    return decoded.exp * 1000 > Date.now();
  } catch {
    return false;
  }
};

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token || !isTokenValid(token)) {
    return <Navigate to="/log-in" replace />;
  }

  return children;
};

export default ProtectedRoute;