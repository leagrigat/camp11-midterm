import { Link } from 'react-router-dom';

type MovieImageProps = {
  movieId: number;
  posterPath: string;
  className?: string;
};

function MovieImage({ movieId, posterPath, className = '' }: MovieImageProps) {
  return (
    <Link to={`/movies/${movieId}`} className={className}>
      <img src={`https://image.tmdb.org/t/p/w300/${posterPath}`} />
    </Link>
  );
}

export default MovieImage;
