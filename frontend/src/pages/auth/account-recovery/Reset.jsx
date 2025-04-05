import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Background from "../../../components/ui/BackGround";
import GradientButton from "../../../components/ui/GradientButton";
import TextField from "../../../components/ui/TextField";
import { requestPasswordReset } from "../../../api/auth";

const schema = z.object({
  email: z.string().email("Invalid email address").min(5, "Email is required"),
});

const Reset = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Reset Password | Sporta AI";
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    const { email } = data;
    try {
      const response = await requestPasswordReset(email);
      console.log("Password reset email sent:", response);
      localStorage.setItem("resetEmail", email);
      navigate("/reset-password");
    } catch (err) {
      console.error("Error sending reset email:", err);
    }
  };

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
        className="flex justify-center w-full p-8 h-screen max-1075:h-fit"
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
            Forgot Password?
          </h1>
          <p className="w-[450px] max-860:w-[350px] text-center mx-auto opacity-80 shadow-md">
            Enter your registered email address, and we'll send you a one-time
            password (OTP) to verify your identity.
          </p>

          <form
            className="flex w-[420px] max-600:w-[300px] flex-col items-start mt-[30px] mx-auto"
            onSubmit={handleSubmit(onSubmit)}
          >
            <TextField
              label="Email address"
              type="email"
              placeholder="Enter your registered email address"
              icon="/images/envelope.png"
              {...register("email")}
              error={errors.email?.message}
            />

            <div className="mt-[20px] w-full">
              <GradientButton
                text="Send OTP"
                type="submit"
                loading={isSubmitting}
              />
            </div>
          </form>
        </div>
      </motion.div>
    </Background>
  );
};

export default Reset;
