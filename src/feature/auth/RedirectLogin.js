import useAuth from "../../hooks/useAuth";
import { Navigate } from "react-router-dom";

export default function RedirectLogin({ children }) {
  // #children = landingpage

  const { authenticatedUser } = useAuth();
  console.log(authenticatedUser);
  if (authenticatedUser) {
    return <Navigate to={"/profile"} />;
  }

  return children;
}
