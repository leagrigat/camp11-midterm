import axios from 'axios';
import { TicketInfo } from '../pages/ReservationPage';

// send ticket info to server
export async function handleBookTicket(ticketInfo: TicketInfo) {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_SERVER_URL}:${import.meta.env.VITE_SERVER_PORT}/reservation`,
      ticketInfo,
      {
        headers: {
          accept: 'application/json',
        },
        withCredentials: true,
      }
    );

    console.log('RESPONSE', response.data); // Handle success
    // You can navigate to a success page or show a success message here
    return response.data;
  } catch (error) {
    console.error('There was a problem with the reservation:', error); // Handle errors
    throw error;
  }
}

export async function getReservations(movieId: string) {
  try {
    const response = await axios.get<TicketInfo[]>(
      `${import.meta.env.VITE_SERVER_URL}:${import.meta.env.VITE_SERVER_PORT}/reservation/${movieId}`,
      {
        headers: {
          accept: 'application/json',
        },
      }
    );
    return await response.data;
  } catch (err) {
    console.error('Error:', err);
    return [];
  }
}
