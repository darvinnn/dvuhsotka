import { ButtonHTMLAttributes, ReactNode } from "react";
import style from "./Button.module.css";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  type?: "submit" | "button";
  children?: ReactNode;
}

const Button = ({ children, className, type = "button", ...props }: Props) => {
  return (
    <button className={`${style.button} ${className}`} type={type} {...props}>
      {children}
    </button>
  );
};

export default Button;
