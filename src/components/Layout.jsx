import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/auth/authSlice";

export default function Layout({ children }) {
    const dispatch = useDispatch();
    const { role } = useSelector((state) => state.auth);

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
                <h1 className="text-xl font-bold">RBAC App</h1>
                <nav className="space-x-4">
                    {role === "admin" && <Link to="/dashboard/admin">Admin</Link>}
                    {role === "merchant" && <Link to="/dashboard/merchant">Merchant</Link>}
                    {role === "member" && <Link to="/dashboard/member">Member</Link>}
                    {role && (
                        <button
                            onClick={() => dispatch(logout())}
                            className="ml-4 px-3 py-1 bg-red-500 rounded"
                        >
                            Logout
                        </button>
                    )}
                </nav>
            </header>
            <main className="flex-1 p-6">{children}</main>
        </div>
    );
}
