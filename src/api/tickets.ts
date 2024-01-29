import axios from 'axios';
import { TicketInfo } from '../pages/ReservationPage';

// send ticket info to server
export async function handleBookTicket(ticketInfo: TicketInfo) {
  try {
    const response = await axios.post(
      'http://localhost:8000/reservation',
      ticketInfo,
      {
        headers: {
          accept: 'application/json',
        },
      }
    );

    console.log(response.data.message); // Handle success
    // You can navigate to a success page or show a success message here
    return response.data;
  } catch (error) {
    console.error('There was a problem with the reservation:', error); // Handle errors
    throw error;
  }
}

// fetch reservation from server
const PORT = 8000;

export async function getReservations(movieId: string) {
  try {
    // is the path correct?
    const response = await fetch(
      `http://localhost:${PORT}/reservation/${movieId}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    const data = await response.json();
    return data.message;
  } catch (err) {
    console.error('Error:', err);
    return [];
  }
}
