import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

export default function MerchantLogin() {
    const [storeName, setStoreName] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Mock authentication
        dispatch(login({ token: "merchant-token", role: "merchant" }));
        navigate("/dashboard/merchant");
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded p-6 w-96">
                <h2 className="text-2xl font-bold mb-4">Merchant Login</h2>
                <input
                    type="text"
                    placeholder="Store Name"
                    className="border w-full p-2 mb-3 rounded"
                    value={storeName}
                    onChange={(e) => setStoreName(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="border w-full p-2 mb-3 rounded"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit" className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700">
                    Login
                </button>
            </form>
        </div>
    );
}
