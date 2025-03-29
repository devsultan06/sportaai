import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Onboarding from "./pages/Onboarding/Onboarding";


const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* <Route path="/get-started/login" element={<Auth />} />
        <Route path="/get-started/register" element={<Auth />} />
        <Route path="/home" element={<ProtectedRoute element={<Home />} />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
