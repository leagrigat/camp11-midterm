import React, { useState } from 'react'

type SeatType = {
    id: number;
    isAvailable: boolean;
    isSelected: boolean;
    isReserved: boolean;
}

function SelectSeats(clickedSeatId: number) {
    const [seats, setSeats] = useState<SeatType[]>

function handleSeatClick () {
    const updatedSeats = seats.map(seat => {
        if(seat.id === clickedSeatId) {
            return { ...seat, isSelected: !seat.isSelected};
        }
        return seat;
    })
    setSeats(updatedSeats)
}

  return (
    <div>
        {seats.map(seat => (
            <button key={seat.id} className={seat.isSelected ? "selected-seat" : "" } onClick={() => {handleSeatClick}}>Seat{seat.id}</button>
        ))}
    </div>
  )
}

export default SelectSeats