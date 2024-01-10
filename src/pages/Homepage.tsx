import { useEffect, useState } from 'react';
import { Movie, getNowPlayingMovie } from '../api/movies';

function Homepage() {
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
        <div className='flex gap-9 rounded-lg h-[234px]'>
          {movieData.map(movie => (
            <img key={movie.id} className='rounded-lg' src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} />
          ))}
        </div>
    </>
  );
}

export default Homepage;
