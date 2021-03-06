import React from "react";
import { motion } from "framer-motion";
import "./Button.scss";

const Button = ({ children, onClick, variant = "primary", className = "" }) => {
  return (
    <motion.button
      className={
        variant === "primary"
          ? "btn btn-primary " + className
          : "btn btn-secondary " + className
      }
      onClick={onClick}
      initial={{
        scale: 1.2,
      }}
      animate={{
        scale: 1,
      }}
      transition={{
        duration: 0.5,
      }}
    >
      {children}
    </motion.button>
  );
};

export default Button;
