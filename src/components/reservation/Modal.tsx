import Button from '../Button';
import { Seat } from '../../components/reservation/SelectSeatsPage';
import { ticketInfo } from '../../pages/ReservationPage';

export type ModalType = {
  selectedSeats: Seat[];
  onNextClick: () => void;
  updateSeatInfo: (seats: ticketInfo) => void;
  ticketInfo: ticketInfo;
};

function Modal({
  selectedSeats,
  onNextClick,
  updateSeatInfo,
  ticketInfo,
}: ModalType) {
  const frontSeats = selectedSeats.filter(
    seat => seat.name && seat.name[0] === 'A'
  );
  const middleSeats = selectedSeats.filter(
    seat => seat.name && seat.name[0] !== 'A' && seat.name[0] !== 'F'
  );
  const backSeats = selectedSeats.filter(
    seat => seat.name && seat.name[0] === 'F'
  );

  const frontPrice = Number((frontSeats.length * 12.95).toFixed(2));
  const middlePrice = Number((middleSeats.length * 14.95).toFixed(2));
  const backPrice = Number((backSeats.length * 16.95).toFixed(2));

  const totalPrice = Number(frontPrice + middlePrice + backPrice).toFixed(2);

  return (
    <>
      <div className="w-screen h-[211px] bg-dark-light rounded-t-3xl -mx-5 p-4 fixed bottom-0">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between text-xs font-medium">
            <div className="text-white-dimmed flex gap-6">
              <div>{frontSeats.length}x</div>
              <div className="text-white">Seat - Front</div>
            </div>
            <div className="flex gap-[4px]">
              <div className="text-white">$12.95</div>
              <span className="text-white-dimmed">/ each</span>
            </div>
          </div>
          <div className="flex justify-between text-xs font-medium">
            <div className="text-white-dimmed flex gap-6">
              <div>{middleSeats.length}x</div>
              <div className="text-white">Seat - Middle</div>
            </div>
            <div className="flex gap-[4px]">
              <div className="text-white">$14.95</div>
              <span className="text-white-dimmed">/ each</span>
            </div>
          </div>
          <div className="flex justify-between text-xs font-medium">
            <div className="text-white-dimmed flex gap-6">
              <div>{backSeats.length}x</div>
              <div className="text-white">Seat - Back</div>
            </div>
            <div className="flex gap-[4px]">
              <div className="text-white">$16.95</div>
              <span className="text-white-dimmed">/ each</span>
            </div>
          </div>
        </div>

        <hr className="border-white-dimmed mt-4" />
        <div className="flex items-end gap-6 pt-[33px]">
          <div className="flex flex-col w-[150px]">
            <span className="text-white-dimmed text-xs">Total Price</span>
            <span className="text-white font-bold text-xl">${totalPrice}</span>
          </div>
          <Button
            variant="primary"
            size="lg"
            onClick={() => {
              updateSeatInfo({
                ...ticketInfo,
                price: totalPrice,
                seat: selectedSeats.map(seat => String(seat.name)),
              });
              onNextClick();
            }}
          >
            {selectedSeats.length <= 1
              ? 'Book Ticket' || selectedSeats.length >= 2
              : 'Book Tickets'}
          </Button>
        </div>
      </div>
    </>
  );
}

export default Modal;
