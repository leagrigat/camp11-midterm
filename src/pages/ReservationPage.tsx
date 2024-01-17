import React from 'react';
import { useState } from 'react';
import Modal from '../components/Modal';

export type Seat = {
  name: string | null;
  isSelected: boolean;
  isReserved: boolean;
};

function generateSeats() {
  // prettier-ignore
  const seats = [ null, 'A1', 'A2', 'A3',  null, 'A4', 'A5', 'A6',  null,
                  'B1', 'B2', 'B3', 'B4',  null, 'B5', 'B6', 'B7',  'B8',
                  'C1', 'C2', 'C3', 'C4',  null, 'C5', 'C6', 'C7',  'C8',
                  'D1', 'D2', 'D3', 'D4',  null, 'D5', 'D6', 'D7',  'D8',
                  'E1', 'E2', 'E3', 'E4',  null, 'E5', 'E6', 'E7',  'E8',
                  null, 'F1', 'F2', 'F3',  null, 'F4', 'F5', 'F6',  null,];

  const seatObj: Seat[] = seats.map((seat, idx) => {
    return { name: seat, isSelected: false, isReserved: false };
  });
  console.log(seatObj);
  return seatObj;
}

function ReservationPage() {
  const [seatsInfo, setSeatsInfo] = useState(() => generateSeats());

  const selectedSeats = seatsInfo.filter(seat => seat.isSelected);

  function handleClick(seatId: number) {
    setSeatsInfo(prevSeats =>
      prevSeats.map((seat, idx) =>
        idx === seatId ? { ...seat, isSelected: !seat.isSelected } : seat
      )
    );
  }
  return (
    <div>
      <h1 className="text-white">Hallo reservation</h1>;
      <div className="grid grid-cols-9 gap-2 auto-rows-max">
        {seatsInfo.map((seat, idx) => {
          if (!seat.name)
            return <div className="w-[28px] h-[28px]" key={idx}></div>;

          return (
            <button
              className={`w-[28px] h-[28px] bg-white-dimmed rounded ${
                seat.isSelected ? 'bg-yellow-500' : 'none'
              }`}
              key={idx}
              onClick={() => {
                handleClick(idx);
              }}
            >
              {seat.name}
            </button>
          );
        })}
      </div>
      {selectedSeats.length > 0 && <Modal selectedSeats={selectedSeats} />}
    </div>
  );
}

export default ReservationPage;

// {selectedSeats && `${selectedSeats.map(seat => seat.name).join()} `}
{
  /* <div className="w-[375px] h-[211px] bg-white-heavy rounded-3xl absolute bottom-0 p-4">
<h3 className="text-white">
Selected Seats:
{selectedSeats && `${selectedSeats.map(seat => seat.name).join()} `}
</h3>
<hr className="border-white-dimmed" />
<Button>Click me please!</Button>
</div> */
}
