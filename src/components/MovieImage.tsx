import { Link } from 'react-router-dom';
import { cn } from '../utils/cn';

type MovieImageProps = {
  movieId: number;
  posterPath: string;
  isRounded?: boolean;
};

function MovieImage({
  movieId,
  posterPath,
  isRounded = true,
}: MovieImageProps) {
  return (
    <Link
      to={`/movies/${movieId}`}
      className={cn(
        'flex-[0_0_41vw] [&>img]:snap-center',
        isRounded && '[&>img]:rounded-lg'
      )}
    >
      <img src={`https://image.tmdb.org/t/p/w300/${posterPath}`} />
    </Link>
  );
}

export default MovieImage;
