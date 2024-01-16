import { Link, useParams } from 'react-router-dom';
import Button from '../components/Button';
import { useGetSingleMovie } from '../hooks/useGetSingleMovie';
import { useGetMovies } from '../hooks/useGetMovies';

function Ticket() {
  const { movieId } = useParams();

  const { movies } = useGetMovies();

  return (
    <div className="">
      <div className="bg-dark-light rounded-lg">
        <img
          key={movieId}
          src={`https://image.tmdb.org/t/p/w300/${movieId!.backdrop_path}`}
          alt=""
        />
      </div>
      <Link to={`/home`}>
        <Button size="lg" variant="primary">
          Back to Home
        </Button>
      </Link>
    </div>
  );
}

export default Ticket;
