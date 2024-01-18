<<<<<<< HEAD
import React from 'react';
import SelectSeatsPage from '../components/reservation/SelectSeatsPage';

function ReservationPage() {
  return (
    <div>
      <SelectSeatsPage />
    </div>
=======
import { useParams } from 'react-router-dom';
import TicketPreviewPage from '../components/reservation/TicketPreviewPage';
import { useGetSingleMovie } from '../hooks/useGetSingleMovie';

function ReservationPage() {
  //fetched data
  const { movieId } = useParams();
  const { movie } = useGetSingleMovie();

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
      {/* <SelectTimePage /> */}
      <TicketPreviewPage {...ticketInformation} movie={movie} />
    </>
>>>>>>> main
  );
}

export default ReservationPage;
