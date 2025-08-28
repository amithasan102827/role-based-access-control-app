import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Home from "../pages/Home";
import AdminLogin from "../pages/login/AdminLogin";
import MerchantLogin from "../pages/login/MerchantLogin";
import MemberLogin from "../pages/login/MemberLogin";

import AdminDashboard from "../pages/dashboards/AdminDashboard";
import MerchantDashboard from "../pages/dashboards/MerchantDashboard";
import MemberDashboard from "../pages/dashboards/MemberDashboard";

import ProtectedRoute from "./ProtectedRoute";

export default function AppRoutes() {
    const { role } = useSelector((state) => state.auth);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login/admin" element={<AdminLogin />} />
                <Route path="/login/merchant" element={<MerchantLogin />} />
                <Route path="/login/member" element={<MemberLogin />} />

                <Route path="/dashboard/admin" element={<ProtectedRoute role="admin"><AdminDashboard /></ProtectedRoute>} />
                <Route path="/dashboard/merchant" element={<ProtectedRoute role="merchant"><MerchantDashboard /></ProtectedRoute>} />
                <Route path="/dashboard/member" element={<ProtectedRoute role="member"><MemberDashboard /></ProtectedRoute>} />

                <Route path="*" element={role ? <Navigate to={`/dashboard/${role}`} /> : <Navigate to="/" />} />
            </Routes>
        </Router>
    );
}
