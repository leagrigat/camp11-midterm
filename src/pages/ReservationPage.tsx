import { useParams } from 'react-router-dom';
import TicketPreviewPage from '../components/reservation/TicketPreviewPage';
import { useGetSingleMovie } from '../hooks/useGetSingleMovie';
import SelectTimePage from '../components/reservation/SelectTimePage';
import { useState } from 'react';

function ReservationPage() {
  //fetched data
  const { movieId } = useParams();
  const { movie } = useGetSingleMovie();

  //change current page

  const [currentPage, setCurrentPage] = useState<
    'selectTimePage' | 'ticketPreviewPage'
  >('selectTimePage');

  //this information can be adjusted with the right fetched data
  const ticketInformation = {
    movieId: movieId || '',
    date: '12 Jan',
    price: '$22.55',
    seat: 'S-4, C-5, A-4',
    time: '12:30',
  };

  return (
    <>
      {currentPage === 'selectTimePage' && (
        <SelectTimePage onClick={() => setCurrentPage('ticketPreviewPage')} />
      )}

      <TicketPreviewPage {...ticketInformation} movie={movie} />
    </>
  );
}

export default ReservationPage;
