import { useParams } from 'react-router-dom';
import TicketPreviewPage from '../components/reservation/TicketPreviewPage';
import { useGetSingleMovie } from '../hooks/useGetSingleMovie';
import SelectTimePage from '../components/reservation/SelectTimePage';
import { useState } from 'react';
import SelectSeatsPage from '../components/reservation/SelectSeatsPage';

type selectPagesString =
  | 'selectTimePage'
  | 'selectSeatsPage'
  | 'ticketPreviewPage';

function ReservationPage() {
  //fetched data
  const { movieId } = useParams();
  const { movie } = useGetSingleMovie();

  //change current page
  const [currentPage, setCurrentPage] =
    useState<selectPagesString>('selectTimePage');

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
        <SelectTimePage onNextClick={() => setCurrentPage('selectSeatsPage')} />
      )}
      {currentPage === 'selectSeatsPage' && (
        <SelectSeatsPage
          onNextClick={() => setCurrentPage('ticketPreviewPage')}
        />
      )}
      {currentPage === 'ticketPreviewPage' && (
        <TicketPreviewPage {...ticketInformation} movie={movie} />
      )}
    </>
  );
}

export default ReservationPage;
