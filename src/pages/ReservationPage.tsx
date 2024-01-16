import React, { useState } from 'react';
import Header from '../components/Header';

export type Seat = {
    id: number;
    isAvailable: boolean;
    isSelected: boolean;
    isReserved: boolean;
}

type SeatType = {
    seat: Seat;
}

function ReservationPage() {
  const [seats, setSeats] = useState<Seat[]>;

  return(
    <div>
    <Header header="Select Seats"></Header>
    <hr className='border-[#FFB43A] w-[279px] m-auto'/>
    <button className='bg-white-dimmed text-center rounded-[0.75rem] text-3xl w-14 h-14'></button>
    </div>
)};

export default ReservationPage;
