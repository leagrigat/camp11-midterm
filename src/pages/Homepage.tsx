import { useEffect, useState } from 'react';
import { Movie, getNowPlayingMovie } from '../api/movies';
import MovieImage from '../components/MovieImage';
import HomePageHeader from '../components/HomePageHeader';
import Input from '../components/Input';
import { IoSearch } from 'react-icons/io5';
import GenreComponent from '../components/GenreComponent';
import { useGetMovies } from '../hooks/useGetMovies';
import { Oval } from 'react-loader-spinner';

function Homepage() {
  const [movieData, setMovieData] = useState<Movie[]>([]);

  /*  useEffect(() => {
    getNowPlayingMovie()
      .then(movies => {
        setMovieData(movies);
      })
      .catch(err => {
        console.log(err);
      });
  }, []); */

  const { movies, isLoading, isError, error } = useGetMovies();

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
            id={'movieSearch'}
          />
        </div>
        <GenreComponent></GenreComponent>
        <h2 className="text-white text-base font-bold">Upcoming Movies</h2>
        <div className="overflow-scroll snap-x">
          <div className="flex gap-9 h-[234px] justify-center items-center">
            {isLoading ? (
              <Oval
                visible={true}
                height="80"
                width="80"
                color="#FFB43A"
                secondaryColor="#363740"
                ariaLabel="oval-loading"
                wrapperStyle={{}}
                wrapperClass=""
              />
            ) : (
              movies?.map(movie => (
                <MovieImage
                  key={movie.id}
                  movieId={movie.id}
                  posterPath={movie.poster_path}
                  className="flex-[1_0_41vw] [&>img]:rounded-lg [&>img]:snap-center"
                />
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
