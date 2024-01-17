import React from 'react';
import { Movie } from '../api/movies';

function ScoreColor({ vote_average }: Movie) {
  let textColor: string;

  if (vote_average * 10 >= 0 && vote_average <= 15) {
    textColor = 'text-red-500';
  } else if (vote_average * 10 > 15 && vote_average <= 50) {
    textColor = 'text-orange-500';
  } else if (vote_average * 10 > 50 && vote_average <= 100) {
    textColor = 'text-green-500';
  } else {
    textColor = 'text-gray-500'; // Fallback-Color, if no number fits
  }

  return (
    <div>
      <p className={`${textColor}`}>{vote_average} + '% ' Score</p>
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
