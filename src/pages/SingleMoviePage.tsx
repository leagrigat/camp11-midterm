import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Movie, getSingleMovie } from '../api/movies';

function SingleMoviePage() {
  const { movieId } = useParams();

  const [movieData, setMovieData] = useState<Movie | null>(null);

  useEffect(() => {
    getSingleMovie(parseInt(movieId!))
      .then(movie => {
        setMovieData(movie);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  return (
    <div>
      {movieData && (
        <img
          key={movieData.id}
          className="rounded-lg"
          src={`https://image.tmdb.org/t/p/w300/${movieData.backdrop_path}`}
        />
      )}
    </div>
  );
}

export default SingleMoviePage;
