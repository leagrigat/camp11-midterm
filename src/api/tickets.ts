import axios from "axios";

export async function handleBookTicket(ticketInfo) {
    try {
        const response = await axios.post('/reservation', ticketInfo) {
            header: {
                accept: 'application/json',
            }
        }
    }
    const { data } = await axios.post(`http my server`,
      
        //body mitschicken
      },
    );
  
    return data.results;
  }