import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./ContextApi";

const RequireAuth = ({ children }) => {
  const { currentUser } = useAuth();
  if (!currentUser) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default RequireAuth;