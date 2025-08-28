import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ role, children }) {
    const { token, role: userRole } = useSelector((state) => state.auth);
    if (!token || userRole !== role) return <Navigate to={`/login/${role}`} />;
    return children;
}
