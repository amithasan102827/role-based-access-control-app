import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

export default function MemberLogin() {
    const [phoneOrEmail, setPhoneOrEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Mock authentication
        dispatch(login({ token: "member-token", role: "member" }));
        navigate("/dashboard/member");
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded p-6 w-96">
                <h2 className="text-2xl font-bold mb-4">Member Login</h2>
                <input
                    type="text"
                    placeholder="Phone or Email"
                    className="border w-full p-2 mb-3 rounded"
                    value={phoneOrEmail}
                    onChange={(e) => setPhoneOrEmail(e.target.value)}
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
                <button type="submit" className="w-full bg-purple-600 text-white p-2 rounded hover:bg-purple-700">
                    Login
                </button>
            </form>
        </div>
    );
}
