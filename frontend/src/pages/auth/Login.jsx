import { Link,  useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import SocialAuth from "../../components/layouts/SocialAuth";
import Background from "../../components/ui/BackGround";
import GradientButton from "../../components/ui/GradientButton";
import TextField from "../../components/ui/TextField";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import loginSchema from "../../schemas/loginSchema";
import Modal from "../../components/ui/Modal";
import useLogin from "./hook/useLogin";

const Login = () => {
  const { handleLogin, loading, snackbarData, setSnackbarData } = useLogin();
  const navigate = useNavigate();
  const storedEmail = localStorage.getItem("verifiedEmail") || "";
  const [email, setEmail] = useState(storedEmail);
  useEffect(() => {
    document.title = "Login | Sporta AI";
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  return (
    <Background bgImage="/images/bg.png">
      <button
        onClick={() => navigate(-1)}
        className="absolute top-7 left-7 px-4 py-2 rounded-full 
                   hover:bg-white/20 transition-opacity duration-200"
      >
        <img src="/images/back.png" alt="Back" className="w-5 h-5" />
      </button>

      <motion.div
        initial={{ x: "100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "-100vw", opacity: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="flex justify-center w-full p-8 h-fit"
      >
        <div className="text-white text-center bg-opacity-50 rounded-lg">
          <div>
            <img
              src="/images/logo.png"
              alt="Logo"
              className="mx-auto mb-[60px] mt-[30px]"
            />
          </div>
          <h1 className="text-white text-[30px] font-bold mb-[5px]">
            Login to your account
          </h1>

          <form
            className="flex w-[420px] max-600:w-[300px] flex-col items-start mt-[30px] mx-auto"
            onSubmit={handleSubmit(handleLogin)}
          >
            <TextField
              label="Email address"
              type="email"
              placeholder="Enter email address"
              icon="/images/envelope.png"
              {...register("email")}
              error={errors.email?.message}
              defaultValue={email || ""}
            />

            <TextField
              label="Password"
              type="password"
              placeholder="Enter password"
              icon="/images/Lock.png"
              {...register("password")}
              error={errors.password?.message}
            />

            <div className="mt-[20px] w-full">
              <GradientButton text="Login" type="submit" loading={loading} />
            </div>

            <p className="text-white text-center mt-[20px] mx-auto opacity-70 text-[15px]">
              <Link
                to="/reset"
                className="text-[#FFBB34] hover:underline cursor-pointer"
              >
                Forgot Password?
              </Link>
            </p>

            <div className="flex justify-center w-full">
              <SocialAuth type="login" />
            </div>
          </form>
        </div>

        <Modal
          open={snackbarData.open}
          onClose={() => setSnackbarData({ ...snackbarData, open: false })}
          severity={snackbarData.severity}
          message={snackbarData.message}
        />
      </motion.div>
    </Background>
  );
};

export default Login;
