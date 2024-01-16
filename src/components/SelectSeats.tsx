import React, { useState } from 'react';

export type Seat = {
    id: number;
    isAvailable: boolean;
    isSelected: boolean;
    isReserved: boolean;
}

type SeatType = {
    seat: Seat;
}

function SelectSeats() {
    const [seats, setSeats] = useState<Seat[]>;

// function handleSeatClick () {
//     const updatedSeats = seats.map(seat => {
//         if(seat.id === clickedSeatId) {
//             return { ...seat, isSelected: !seat.isSelected};
//         }
//         return seat;
//     })
//     setSeats(updatedSeats)
}

  return (
    <div>
        {seats.map(seat.id => (
            <button key={seat.id} className={seat.isSelected ? "selected-seat" : "" } onClick={() => {handleSeatClick}}>Seat{seat.id}</button>
        ))}
    </div>
  )

export default SelectSeats