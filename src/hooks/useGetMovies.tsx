import { useQuery } from '@tanstack/react-query';
import { getNowPlayingMovies } from '../api/movies';

export function useGetMovies() {
  const { data: movies, ...rest } = useQuery({
    queryKey: ['movies'],
    queryFn: getNowPlayingMovies,
  });
  return { movies, ...rest };
}
