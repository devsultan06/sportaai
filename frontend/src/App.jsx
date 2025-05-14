import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Onboarding from "./pages/Onboarding/Onboarding";
import Sport from "./pages/Sport/Sport";
import Role from "./pages/Role/Role";
import Verification from "./pages/auth/Verification";
import Landing from "./pages/landing-page/Landing";
import SetNewPassword from "./pages/auth/account-recovery/SetNewPassword";
import Reset from "./pages/auth/account-recovery/Reset";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import Settings from "./pages/dashboard/settings/Settings";
import Profile from "./pages/dashboard/profile/Profile";
import Explore from "./pages/dashboard/explore/Explore";
import Inventory from "./pages/dashboard/inventory/Inventory";
import Sponsor from "./pages/dashboard/sponsorship/Sponsor";
import Live from "./pages/dashboard/live/Live";
import DolaaAI from "./pages/dashboard/ai/DolaaAI";
import DashboardHome from "./pages/dashboard/home/DashboardHome";
import Dashboard from "./pages/dashboard/Dashboard";

const App = () => {
  useEffect(() => {
    if (!navigator.onLine) {
      toast.error("You're currently offline.");
    }

    const handleOffline = () => toast.error("You are now offline.");
    const handleOnline = () => toast.success("You're back online!");

    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);

  return (
    <BrowserRouter>
      <ToastContainer position="top-right" autoClose={3000} />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sport" element={<Sport />} />
        <Route path="/role" element={<Role />} />
        <Route path="/reset-password" element={<SetNewPassword />} />
        <Route path="/verify" element={<Verification />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<DashboardHome />} />
          <Route path="settings" element={<Settings />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="explore" element={<Explore />} />
          <Route path="profile" element={<Profile />} />
          <Route path="sponsorship" element={<Sponsor />} />
          <Route path="live-match" element={<Live />} />
          <Route path="ai" element={<DolaaAI />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
