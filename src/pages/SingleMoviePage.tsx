import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Movie, SingleMovie, getSingleMovie } from '../api/movies';
import Header from '../components/Header';
import { findCrewByRole } from '../utils/findCrewByRole';

function SingleMoviePage() {
  const { movieId } = useParams();

  const [movieData, setMovieData] = useState<SingleMovie | null>(null); //change the type

  useEffect(() => {
    getSingleMovie(parseInt(movieId!))
      .then(movie => {
        setMovieData(movie);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  const membersData = movieData?.credits.crew;
  const createtor = findCrewByRole();
  console.log(createor);
  return (
    <div className="flex flex-col gap-6">
      <Header header={movieData?.title} />
      {movieData && (
        <img
          key={movieData.id}
          className="rounded-lg m-auto"
          src={`https://image.tmdb.org/t/p/w300/${movieData.backdrop_path}`}
        />
      )}

      <h1 className="text-white font-bold">{movieData?.title}</h1>
      <div className="flex justify-around text-white">
        <span>{movieData?.release_date}</span>
        <span>{movieData?.genre_ids}</span>
        <span></span>
        <button>click me</button>
      </div>
    </div>
  );
}

export default SingleMoviePage;
