import { useEffect, useState } from 'react';
import { Movie, getNowPlayingMovie } from '../api/movies';
import MovieImage from '../components/MovieImage';
import { useGetMovies } from '../hooks/useGetMovies';

function MoviesPage() {
  const { movies, isLoading, error, isError } = useGetMovies();

  return (
    <div>
      <div className="grid grid-rows-2 grid-cols-2 gap-5">
        {movies!.slice(0, 4).map(movie => (
          <MovieImage
            key={movie.id}
            movieId={movie.id}
            posterPath={movie.poster_path}
            //className="flex-[0_0_30vw] [&>img]:rounded-lg"
          />
        ))}
      </div>
      <div>pagination</div>
    </div>
  );
}

export default MoviesPage;
