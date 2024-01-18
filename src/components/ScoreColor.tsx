import React from 'react';
import { Movie } from '../api/movies';
import axios from 'axios';
import { SingleMovie, getSingleMovie } from '../api/movies';
import { useGetSingleMovie } from '../hooks/useGetSingleMovie';
import { id } from 'date-fns/locale';
import movieData from '../pages/SingleMoviePage';

function ScoreColor() {
  // const vote_average: number = useGetSingleMovie();
  const votePercent: number = Math.floor(movieData.vote_average * 10);

  console.log(votePercent);
  console.log(movieData?.vote_average);

  let textColor: string;

  if (votePercent >= 0 && votePercent <= 15) {
    textColor = 'text-red-500';
  } else if (votePercent > 15 && votePercent <= 50) {
    textColor = 'text-orange-500';
  } else if (votePercent > 50 && votePercent <= 75) {
    textColor = 'text-yellow-500';
  } else if (votePercent > 75 && votePercent <= 100) {
    textColor = 'text-green-500';
  } else {
    textColor = 'text-gray-500'; // Fallback-Color, if no number fits
  }

  return (
    <div>
      <p className={textColor}>{votePercent + '$'} </p>
    </div>
  );
}

export default ScoreColor;

{
  /* <span className="text-success">
{movie && Math.floor(movie?.vote_average * 10) + '% '}
</span> */
}

// The single movie page includes a rating score. Please color that score based on the rating.
// 0-15 is red
// 15-50 is orange
// 50-100 is green
