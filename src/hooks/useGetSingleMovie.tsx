import { useQuery } from '@tanstack/react-query';
import { getSingleMovie } from '../api/movies';
import { useParams } from 'react-router-dom';

export function useGetSingleMovie() {
  const { movieId } = useParams(); //useParams always returns a string

  const { data: movie } = useQuery({
    queryKey: ['singleMovie', movieId],
    queryFn: async () => await getSingleMovie(Number(movieId)),
  });
  return { movie };
}
