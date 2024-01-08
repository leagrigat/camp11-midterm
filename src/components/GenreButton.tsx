import React from 'react';
import { genresLibary } from '../context/GenreProvider';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

interface Props extends ButtonProps {
  genreId?: Number|null;
  genre?: String|null;
}

function filterById(gId:Number){
  return genresLibary.filter(obj=>{return obj.id === gId})[0]
}

function filterByGenre(genre:String){
  return genresLibary.filter(obj=>{return obj.genre === genre})[0]
}

function GenreButton({ children, genreId = null, genre=null, ...props }: Props) {
  return (
    <button
      {...props}
      className="bg-white-dimmed disabled:bg-dark-light text-center rounded-[0.75rem] patext-center text-3xl p-[0.81rem]"
    >
      {genreId && filterById(genreId).emoji}
      {!genreId && genre && filterByGenre(genre).emoji}
      {children}
    </button>
  );
}

export default GenreButton;
