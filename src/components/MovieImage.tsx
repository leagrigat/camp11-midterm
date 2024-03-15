import { Link } from 'react-router-dom';
import { cn } from '../utils/cn';
import notFoundImage from '../assets/404blueUnicornNotFound.png';

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
      data-testid="movie-image"
      to={`/movies/${movieId}`}
      className={cn(
        isRounded && 'flex-[1_0_41vw] [&>img]:snap-center [&>img]:rounded-lg',
        !isRounded &&
          '[&>img]:w-[157px] [&>img]:min-w-[157px] [&>img]:h-[237.5px]'
      )}
    >
      <img
        src={
          posterPath
            ? `https://image.tmdb.org/t/p/w300/${posterPath}`
            : notFoundImage
        }
      />
    </Link>
  );
}

export default MovieImage;
