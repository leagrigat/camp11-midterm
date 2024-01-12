import { Link } from 'react-router-dom';

type MovieImageProps = {
  movieId: number;
  posterPath: string;
  className?: string;
};

function MovieImage({ movieId, posterPath, className = '' }: MovieImageProps) {
  return (
    <Link
      to={`/movies/${movieId}`}
      className="flex-[1_0_41vw] [&>img]:rounded-lg [&>img]:snap-center"
    >
      <img src={`https://image.tmdb.org/t/p/w300/${posterPath}`} />
    </Link>
  );
}

export default MovieImage;
