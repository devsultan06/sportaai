import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Background from "../../components/ui/BackGround";
import GradientButton from "../../components/ui/GradientButton";
import TextField from "../../components/ui/TextField";
import SocialAuth from "../../components/layouts/SocialAuth";
import { useEffect } from "react";
import registerSchema from "../../schemas/registerSchema";
import useRegister from "./hook/useRegister";

const Register = () => {
  const { handleRegister, loading, snackbarData, setSnackbarData } =
    useRegister();

  useEffect(() => {
    document.title = "Register | Sporta AI";
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const openGooglePopup = () => {
    const width = 500;
    const height = 600;
    const left = window.innerWidth / 2 - width / 2;
    const top = window.innerHeight / 2 - height / 2;

    window.open(
      "https://sportaai.onrender.com/api/auth/google/login/",
      "GoogleSignIn",
      `width=${width},height=${height},top=${top},left=${left},scrollbars=yes,resizable=yes`
    );

    const checkInterval = setInterval(() => {
      const data = localStorage.getItem("google-auth-data");

      if (data) {
        clearInterval(checkInterval);
        try {
          const user = JSON.parse(data);
          console.log("Logged in via Google:", user);
          window.location.href = "/sport";
        } catch (e) {
          console.error("Failed to parse auth data:", e);
        }
      }
    }, 500);
  };

  return (
    <Background bgImage="/images/bg.png">
      <motion.div
        initial={{ x: "-100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "-100vw", opacity: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="flex justify-center w-full p-8"
      >
        <div className="text-white text-center bg-opacity-50 rounded-lg">
          <h1 className="text-white text-[30px] font-bold">Create account</h1>

          <form
            className="flex w-[480px] max-600:w-[300px] flex-col items-start mt-[30px] mx-auto"
            onSubmit={handleSubmit(handleRegister)}
          >
            <TextField
              label="Full Name"
              type="text"
              placeholder="(First, Middle (Optional), Last name) e.g Joe William Alex"
              icon="/images/User.png"
              {...register("fullName")}
              error={errors.fullName?.message}
            />
            <TextField
              label="Email address"
              type="email"
              placeholder="Enter email address"
              icon="/images/envelope.png"
              {...register("email")}
              error={errors.email?.message}
            />
            <TextField
              label="Password"
              type="password"
              placeholder="Enter password"
              icon="/images/Lock.png"
              {...register("password")}
              error={errors.password?.message}
            />
            <TextField
              label="Confirm Password"
              type="password"
              placeholder="Confirm Password "
              icon="/images/Lock.png"
              {...register("confirmPassword")}
              error={errors.confirmPassword?.message}
            />

            <div className="mt-[20px] w-full">
              <GradientButton
                text="Create account"
                icon="/images/User-plus.png"
                type="submit"
                loading={loading}
              />
            </div>
          </form>

          <div className="flex justify-center w-full">
            <SocialAuth type="signup" handleGooglePopup={openGooglePopup} />
          </div>
        </div>
      </motion.div>

    </Background>
  );
};

export default Register;
