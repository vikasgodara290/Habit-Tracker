
import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{

}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={className}
        {...props}
        ref={ref}
      />
    );
  }
);

export default Input;