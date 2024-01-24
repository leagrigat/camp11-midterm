import { useParams } from 'react-router-dom';
import TicketPreviewPage from '../components/reservation/TicketPreviewPage';
import { useGetSingleMovie } from '../hooks/useGetSingleMovie';
import SelectTimePage from '../components/reservation/SelectTimePage';
import { useState } from 'react';
import SelectSeatsPage from '../components/reservation/SelectSeatsPage';
import { SingleMovie } from '../api/movies';

type selectPagesString =
  | 'selectTimePage'
  | 'selectSeatsPage'
  | 'ticketPreviewPage';

export type TicketInfo = {
  movieId: string;
  date: string;
  price: string;
  seat: string[];
  time: string;
  movie: SingleMovie | undefined;
};

function ReservationPage() {
  //fetched data
  const { movieId } = useParams();
  const { movie } = useGetSingleMovie();

  //change current page
  const [currentPage, setCurrentPage] =
    useState<selectPagesString>('selectTimePage');

  //this information can be adjusted with the right fetched data

  const [ticketInformation, updateTicketInformation] = useState({
    movieId: movieId || '',
    date: '',
    price: '',
    seat: [''],
    time: '',
    movie,
  });

  return (
    <>
      {currentPage === 'selectTimePage' && (
        <SelectTimePage
          onNextClick={() => {
            setCurrentPage('selectSeatsPage');
          }}
          updateTimeInfo={dateTime => updateTicketInformation(dateTime)}
          ticketInfo={ticketInformation}
        />
      )}
      {currentPage === 'selectSeatsPage' && (
        <SelectSeatsPage
          onNextClick={() => {
            setCurrentPage('ticketPreviewPage');
          }}
          updateSeatInfo={seats => updateTicketInformation(seats)}
          ticketInfo={ticketInformation}
        />
      )}
      {currentPage === 'ticketPreviewPage' && (
        <TicketPreviewPage {...ticketInformation} movie={movie} />
      )}
    </>
  );
}

export default ReservationPage;
