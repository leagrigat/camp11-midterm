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
        isRounded && 'flex-[1_0_41vw] [&>img]:snap-center [&>img]:rounded-lg',
        !isRounded && '[&>img]:w-[157px] [&>img]:h-[237.5px] [&>img]:min-w-[157px] [&>img]:h-[237.5px]'
      )}
    >
      <img src={`https://image.tmdb.org/t/p/w300/${posterPath}`} />
    </Link>
  );
}

export default MovieImage;
