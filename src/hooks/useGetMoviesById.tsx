import { useQuery } from '@tanstack/react-query';
import { getMoviesByID } from '../api/movies';

export function useGetMoviesById() {
  const { data: movies, ...rest } = useQuery({
    queryKey: ['favmovies'],
    queryFn: async () => await getMoviesByID(),
  });
  return { movies, ...rest };
}
