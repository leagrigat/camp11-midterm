import { useQuery } from '@tanstack/react-query';
import { getNowPlayingMovie } from '../api/movies';

export function useGetMovies() {
  const { data: movies, ...rest } = useQuery({
    queryKey: ['movies'],
    queryFn: getNowPlayingMovie,
  });
  return { movies, ...rest };
}
