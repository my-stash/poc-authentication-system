import React from "react";

type ButtonProps = {
  label: string; 
  onClick?: () => void; 
  disabled?: boolean; 
};

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled = false }) => {
  return (
    <button  className="w-full  bg-gradient-to-tr from-teal-800 via-teal-700 via-46% to-teal-600 text-teal-50 font-bold h-10 rounded-lg"
      onClick={onClick}
      disabled={disabled}        >
      {label}
    </button>
  );
};

export default Button;