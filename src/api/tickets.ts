import axios from "axios";
import { TicketInfo } from "../pages/ReservationPage";

export async function handleBookTicket(ticketInfo: TicketInfo) {
    try {
        const response = await axios.post('http://localhost:8080/reservation', ticketInfo, {
            headers: {
                accept: 'application/json',
                // any other headers you need
            },
        });

        console.log(response.data.message); // Handle success
        // You can navigate to a success page or show a success message here
        return response.data; // Optionally return data if needed
    } catch (error) {
        console.error('There was a problem with the reservation:', error); // Handle errors
        // You can show an error message to the user here
        throw error; // Re-throw the error if you want calling code to handle it
    }
}