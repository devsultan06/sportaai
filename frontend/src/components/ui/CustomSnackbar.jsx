import { Snackbar, Alert } from "@mui/material";
import { motion } from "framer-motion";

const CustomSnackbar = ({ open, onClose, severity = "error", message = "", bgColor }) => {
  const defaultBgColors = {
    error: "#D32F2F",
    success: "#2E7D32",
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={5000}
      onClose={onClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
    >
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ type: "spring", damping: 10 }}
      >
        <Alert
          severity={severity}
          onClose={onClose}
          sx={{
            bgcolor: bgColor || defaultBgColors[severity],
            color: "#fff",
            fontWeight: "bold",
            boxShadow: 3,
          }}
        >
          {message}
        </Alert>
      </motion.div>
    </Snackbar>
  );
};

export default CustomSnackbar;
