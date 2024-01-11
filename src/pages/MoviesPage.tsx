import { useEffect, useState } from 'react';
import { Movie, getNowPlayingMovie } from '../api/movies';
import MovieImage from '../components/MovieImage';

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
    <div>
      <div className="grid grid-rows-2 grid-cols-2 gap-5">
        {movieData.slice(0, 4).map(movie => (
          <MovieImage
            key={movie.id}
            movieId={movie.id}
            posterPath={movie.poster_path}
            //className="flex-[0_0_30vw] [&>img]:rounded-lg"
          />
        ))}
      </div>
      <div>pagination</div>
    </div>
  );
}

export default MoviesPage;
