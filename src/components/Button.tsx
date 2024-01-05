import React from 'react';

// Definiere die ButtonProps
interface ButtonProps {
  onClick: () => void;
  label: string;
}

// Definiere die Button-Komponente
const Button: React.FC<ButtonProps> = ({ onClick, label }) => {
  return (
    <button className="bg-secondary" onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
