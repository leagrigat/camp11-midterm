import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

interface Props extends ButtonProps {
  genre?:
    | 'action'
    | 'adventure'
    | 'animation'
    | 'comedy'
    | 'crime'
    | 'documentary'
    | 'drama'
    | 'family'
    | 'fantasy'
    | 'history'
    | 'horror'
    | 'music'
    | 'mystery'
    | 'romance'
    | 'scifi'
    | 'thriller';
}

function GenreButton({ children, genre = 'action', ...props }: Props) {
  return (
    <button
      {...props}
      className="bg-white-dimmed disabled:bg-dark-light text-center rounded-[0.75rem] w-[3.5rem] h-[3.5rem] text-center"
    >
      {children}
    </button>
  );
}

export default GenreButton;
