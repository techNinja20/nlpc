import React from 'react'

const Button = ({ type, className, text, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={`bg-green text-white text-center py-[0.5rem] px-[1rem] rounded-[0.5rem] hover:opacity-90 ${className} `}
    >
      {text}
    </button>
  );
};

export default Button