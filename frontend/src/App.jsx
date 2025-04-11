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
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
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
      </Routes>
    </BrowserRouter>
  );
};

export default App;
