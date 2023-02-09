import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function ProtectedRoute({ children }) {
  const { authenticatedUser } = useAuth();
  if (!authenticatedUser) {
    /// if forget ! it will run loop
    return <Navigate to={"/home"} />;
  }
  return children;
}
