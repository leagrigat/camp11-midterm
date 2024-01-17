import MovieImage from '../components/MovieImage';
import HomePageHeader from '../components/HomePageHeader';
import Input from '../components/Input';
import { IoSearch } from 'react-icons/io5';
import GenreComponent from '../components/GenreComponent';
import { useGetMovies } from '../hooks/useGetMovies';
import LoadingSpinner from '../components/LoadingSpinner';

function Homepage() {
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
        <GenreComponent />
        {/* h2 and images div have to be inside 1 container so that we can remove the gap between them */}
        <h2 className="text-white text-base font-bold">Upcoming Movies</h2>
        <div className="overflow-scroll snap-x -mx-5">
          <div className="flex gap-x-9 items-center">
            {isLoading ? (
              <LoadingSpinner />
            ) : (
              movies?.map(movie => (
                <MovieImage
                  key={movie.id}
                  movieId={movie.id}
                  posterPath={movie.poster_path}
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
