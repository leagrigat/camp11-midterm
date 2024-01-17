import { Link, useParams } from 'react-router-dom';
import Button from '../components/Button';
import { useGetSingleMovie } from '../hooks/useGetSingleMovie';

function ReservationPage() {
  const { movieId } = useParams();
  const { movie } = useGetSingleMovie();

  return (
    <div className="">
      <div className="bg-dark-light rounded-lg">
        <img
          className="w-full rounded-t-lg min-h-40"
          key={movieId}
          src={`https://image.tmdb.org/t/p/w300/${movie?.backdrop_path}`}
          alt=""
        />
        <div>
          <h1>{movie?.original_title}</h1>
        </div>
      </div>
      <Link to={`/home`}>
        <Button size="lg" variant="primary">
          Back to Home
        </Button>
      </Link>
    </div>
  );
}

export default ReservationPage;
