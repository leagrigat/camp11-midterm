import { useEffect, useState } from 'react';
import { Movie, getNowPlayingMovie } from '../api/movies';
import HomePageHeader from '../components/HomePageHeader';
import Input from '../components/Input';
import { IoSearch } from 'react-icons/io5';

function Homepage() {
  const [movieData, setMovieData] = useState<Movie[]>([]);

  useEffect(() => {
    getNowPlayingMovie()
      .then(movies => {
        setMovieData(movies);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="flex flex-col gap-6">
        <HomePageHeader
          name="Johannes"
          avatarImg="https://source.unsplash.com/random/?person"
        />
        <div className="text-sm">
          <Input
            isRounded={true}
            icon={<IoSearch className="h-6 w-6" />}
            placeholder="Search"
          />
        </div>
        <h2 className="text-white text-base font-bold">Upcoming Movies</h2>
        <div className="overflow-scroll snap-x ">
          <div className="flex gap-9  h-[234px] ">
            {movieData.map(movie => (
              <img
                key={movie.id}
                className="rounded-lg snap-center"
                src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
