import { Navigate } from "react-router-dom";

export function ProtectedRoutes({ children, allowedRoles }) {
  const token = localStorage.getItem("token");
  const role = JSON.parse(localStorage.getItem("role"));

  if (!token || !allowedRoles.includes(role)) {
    return <Navigate to="/login" replace />;
  }

  return children;
}