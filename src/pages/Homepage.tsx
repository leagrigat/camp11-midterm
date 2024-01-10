import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Movie, getNowPlayingMovie } from '../api/movies';

function Homepage() {
  //  Ale and Benny are not sure if the following code should stay here. Talking about this to Julian on the 10th of January
  const [movieData, setMovieData] = useState<Movie[]>([]);

  useEffect(() => {
    getNowPlayingMovie()
      .then(movies => {
        setMovieData(movies);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <>
        <div>
          {movieData.map(movie => (
            <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} />
          ))}
        </div>
    </>
  );
}

export default Homepage;
