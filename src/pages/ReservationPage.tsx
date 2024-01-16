import React, { useState } from 'react';
import Header from '../components/Header';
import { id } from 'date-fns/locale';

export type Seat = {
  id: number;
  isAvailable: boolean;
  isSelected: boolean;
  isReserved: boolean;
};

function ReservationPage() {
  const [seats, setSeats] = useState<Seat[]>(Array.from({length: 24}, (_, index) => ({
    id: index +1,
    isAvailable: true,
    isSelected: false,
    isReserved: false,
  })))

  const handleSeatClick = (seatId: number) => {
    const updatedSeats = seats.map(seat => {
      if(seat.id === seatId) {
        return {...seat, isSelected: !seat.isSelected};
      }
      return seat;
    });

    setSeats(updatedSeats);
  }
  console.log(seats)

  return (
    <div>
      <Header header="Select Seats"></Header>
      <hr className="border-[#FFB43A] w-[279px] m-auto" />
      <div className="grid grid-cols-4 w-[50%] gap-4">{seats.map(seat =>(
        <button key={seat.id} className={`bg-white-dimmed text-center rounded-[4px] text-xl w-[28px] h-[28px]${seat.isSelected ? "bg-[#FFB43A]" : "none"}`} onClick={() => {handleSeatClick(seat.id)}}>{seat.id}</button>))}
      </div>
    </div>
  );
}

export default ReservationPage;
