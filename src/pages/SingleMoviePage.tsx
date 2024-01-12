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
  const membersData = movieData ? movieData.credits.crew : [];
  const writer = findCrewByRole(membersData, 'Writer');
  const director = findCrewByRole(membersData, 'Director');
  const unknownWriter = writer ? writer.name : 'Unknown Writer';
  const genres = movieData?.genres.map(genre => {
    return genre.name;
  });

  console.log(movieData?.genres.map(genre => genre.name).join(' / '));

  return (
    <div className="flex flex-col gap-6">
      <Header header={'Movie Detail'} />
      {movieData && (
        <img
          key={movieData.id}
          className="rounded-lg"
          src={`https://image.tmdb.org/t/p/w300/${movieData.backdrop_path}`}
        />
      )}

      <h1 className="text-white font-bold">{movieData?.title}</h1>
      <div className="flex justify-around text-white">
        <div>
          <span>{movieData?.release_date.slice(0, 4)}</span>
          <span className="font-bold">{genres}</span>
        </div>

        <div className="flex flex-col gap-2 text-white-dimmed">
          <span>Director: </span>
          <span>Writer: </span>
        </div>
        <div className="flex flex-col gap-2 font-bold">
          <span>{director?.name}</span>
          <span>{unknownWriter}</span>
        </div>

        <span></span>
      </div>
    </div>
  );
}

export default SingleMoviePage;
