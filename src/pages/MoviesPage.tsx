import { useEffect, useState } from 'react';
import { Movie, getNowPlayingMovie } from '../api/movies';

function MoviesPage() {
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
    <div className="px-5 py-8">
      <div className="flex flex-wrap justify-center">
        {movieData.slice(0, 4).map(movie => (
          <img
            key={movie.id}
            className="rounded-lg h-56 w-36"
            src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
          />
        ))}
      </div>
      <div>pagination</div>
    </div>
  );
}

export default MoviesPage;
