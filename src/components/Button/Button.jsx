import React from "react";
import { motion } from "framer-motion";
import "./Button.scss";

const Button = ({
  children,
  onClick,
  variant = "primary",
  className = "",
  ...props
}) => {
  return (
    <motion.button
      className={
        variant === "primary"
          ? "btn btn-primary " + className
          : "btn btn-secondary " + className
      }
      onClick={onClick}
      initial={{
        scale: 1.1,
      }}
      animate={{
        scale: 1,
      }}
      transition={{
        duration: 0.5,
      }}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;
