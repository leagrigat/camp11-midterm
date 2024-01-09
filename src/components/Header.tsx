import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { Link, useNavigate } from 'react-router-dom';

type HeaderProps = React.InputHTMLAttributes<HTMLInputElement>;

interface Props extends HeaderProps {
  header: string;
  icon?: React.ReactElement;
}

function Header({ header, icon }: Props) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <div className="flex items-center font-bold px-5 text-white justify-between">
      <IoIosArrowBack onClick={handleClick} />
      <h2>{header}</h2>
      <div>{icon}</div>
    </div>
  );
}

export default Header;
