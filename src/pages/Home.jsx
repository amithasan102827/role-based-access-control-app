import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-3xl font-bold mb-6">Welcome to RBAC App</h1>
            <div className="space-x-4">
                <Link to="/login/admin" className="px-4 py-2 bg-blue-600 text-white rounded">Admin Login</Link>
                <Link to="/login/merchant" className="px-4 py-2 bg-green-600 text-white rounded">Merchant Login</Link>
                <Link to="/login/member" className="px-4 py-2 bg-purple-600 text-white rounded">Member Login</Link>
            </div>
        </div>
    );
}
