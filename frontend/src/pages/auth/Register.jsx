import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Background from "../../components/ui/BackGround";
import GradientButton from "../../components/ui/GradientButton";
import TextField from "../../components/ui/TextField";
import SocialAuth from "../../components/layouts/SocialAuth";
import { useEffect } from "react";
import registerSchema from "../../schemas/registerSchema";
import Modal from "../../components/ui/Modal";
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

            <div className="flex justify-center w-full">
              <SocialAuth type="signup" />
            </div>
          </form>
        </div>
      </motion.div>

      <Modal
        open={snackbarData.open}
        onClose={() => setSnackbarData({ ...snackbarData, open: false })}
        severity={snackbarData.severity}
        message={snackbarData.message}
      />
    </Background>
  );
};

export default Register;
