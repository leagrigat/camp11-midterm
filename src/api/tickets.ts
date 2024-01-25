import axios from "axios";
import { TicketInfo } from "../pages/ReservationPage";

export async function handleBookTicket(ticketInfo: TicketInfo) {
    try {
        const response = await axios.post('http://localhost:8000/reservation', ticketInfo, {
            headers: {
                accept: 'application/json',
            },
        });

        console.log(response.data.message); // Handle success
        // You can navigate to a success page or show a success message here
        return response.data;
    } catch (error) {
        console.error('There was a problem with the reservation:', error); // Handle errors
        throw error;
    }
}