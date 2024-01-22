import React from 'react';
import Button from './Button';
import { Seat } from '../pages/ReservationPage';

export type ModalType = {
  selectedSeats: Seat[];
};

function Modal({ selectedSeats }: ModalType) {
  //   console.log(selectedSeats);
  const aRowSeats = selectedSeats.filter(seat => seat.name[0] === 'A');
  const bRowSeats = selectedSeats.filter(seat => seat.name[0] === 'B');
  const frontSeats = aRowSeats.concat(bRowSeats);

  const cRowSeats = selectedSeats.filter(seat => seat.name[0] === 'C');
  const dRowSeats = selectedSeats.filter(seat => seat.name[0] === 'D');
  const middleSeats = cRowSeats.concat(dRowSeats);

  const eRowSeats = selectedSeats.filter(seat => seat.name[0] === 'E');
  const fRowSeats = selectedSeats.filter(seat => seat.name[0] === 'F');
  const backSeats = eRowSeats.concat(fRowSeats);

  //   const middleSeats = 'all other seats which are not a or f row 3';
  //   const frontSeatCost = 12.95;
  //   const middleSeatsCost = 14.95;
  //   const backSeatsCost = 16.95;

  const middlePrice = (middleSeats.length * 14.95).toFixed(2);
  const frontPrice = (frontSeats.length * 12.95).toFixed(2);
  const backPrice = (backSeats.length * 16.95).toFixed(2);

  console.log(frontPrice);

  return (
    <div>
      <div className="w-screen h-[211px] bg-dark-light rounded-3xl absolute bottom-0 p-4">
        <h3 className="text-white">
          Selected Seats:
          {/* {`${selectedSeats.map(seat => seat.name).join()} `} */}
        </h3>
        <h3 className="text-white">Seat front:{frontPrice}</h3>
        <h3 className="text-white">Seat middle:{middlePrice}</h3>
        <h3 className="text-white">Seat back:{backPrice}</h3>
        <hr className="border-white-dimmed pt-4" />
        <Button variant="primary" size="lg">
          Book Ticket
        </Button>
      </div>
    </div>
  );
}

export default Modal;
