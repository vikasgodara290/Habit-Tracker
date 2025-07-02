"use client";
import React from "react";

interface InputProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
  onclick : () => void;
  text : string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, onclick, text, ...props }, ref) => {
    return (
      <button
        className={className}
        onClick={onclick}
        {...props}
      >
        {text}
      </button>
    );
  }
);

export default Input;
