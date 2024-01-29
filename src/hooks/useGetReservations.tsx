import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { getReservations } from '../api/tickets';

function useGetReservations() {
  const { movieId } = useParams();

  const { data: movie, ...rest } = useQuery({
    queryKey: ['reservation', movieId],
    queryFn: async () => await getReservations(movieId!),
  });
  return { movie, ...rest };
}

export default useGetReservations;
