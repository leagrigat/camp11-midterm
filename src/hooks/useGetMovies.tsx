import { useQuery } from '@tanstack/react-query';
import { Movie, getNowPlayingMovie } from '../api/movies';

export function useGetMovies() {
  const { data: movies, ...rest } = useQuery({
    queryKey: ['movies'],
    queryFn: getNowPlayingMovie,
  });
  return { movies, ...rest };
}
