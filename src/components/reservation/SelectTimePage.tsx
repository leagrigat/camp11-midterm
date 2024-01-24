import { useState } from 'react';
import Header from '../Header';
import DateTimeButton from '../DateTimeButton';
import Button from '../Button';
import { format, add } from 'date-fns';
import { TicketInfo } from '../../pages/ReservationPage';

//props onClick to change the ui component
type SelectTimePageProps = {
  onNextClick: () => void;
  updateTimeInfo: (seats: TicketInfo) => void;
  ticketInfo: TicketInfo;
};

// bindings for our date and time formats
const today = new Date();
const hourNow = format(today, 'H');
const minuteNow = format(today, 'mm');

// dates array
const dates = Array.from({ length: 12 }, (_, index) =>
  format(add(today, { days: index }), 'dd MMM')
);

// times array - hardcoded for our screening times
const times = [
  '09:15',
  '09:45',
  '15:00',
  '17:30',
  '19:00',
  '20:30',
  '22:00',
  '23:30',
];

const isTimesButtonDisabled = (activeDateButton: string, time: string) => {
  return (
    !activeDateButton ||
    (activeDateButton === format(today, 'dd MMM') &&
      (Number(time.slice(0, 2)) < Number(hourNow) ||
        (Number(time.slice(0, 2)) === Number(hourNow) &&
          Number(time.slice(3, 5)) <= Number(minuteNow))))
  );
};

function SelectTimePage({
  onNextClick,
  updateTimeInfo,
  ticketInfo,
}: SelectTimePageProps) {
  const [activeDateButton, setActiveDateButton] = useState('');
  const [activeTimeButton, setActiveTimeButton] = useState('');
  const [disabledConfirmButton, setDisabledConfirmButton] = useState(true);

  return (
    <div className="flex flex-col bg-dark h-full">
      <Header header="Select Date & Time"></Header>
      <h3 className="text-white-dimmed font-bold text-sm mt-6">DATE</h3>
      <div className="grid grid-cols-4 items-center justify-items-center mt-4">
        {dates.map(date => (
          <DateTimeButton
            key={date}
            dateTime={date}
            onClick={() => {
              setActiveDateButton(date);
              setActiveTimeButton('');
              setDisabledConfirmButton(true);
              updateTimeInfo({
                ...ticketInfo,
                date: date,
              });
            }}
            active={activeDateButton === date}
          >
            {date}
          </DateTimeButton>
        ))}
      </div>

      <hr className="h-0 border-t border-white-heavy my-6"></hr>

      <h3 className="text-white-dimmed font-bold text-sm">TIME</h3>
      <div className="grid grid-cols-4 items-center justify-items-center mt-4">
        {times.map(time => (
          <DateTimeButton
            key={time}
            onClick={() => {
              setActiveTimeButton(time);
              setDisabledConfirmButton(false);
              updateTimeInfo({
                ...ticketInfo,
                time: time,
              });
            }}
            active={activeTimeButton === time}
            dateTime={time}
            disabled={isTimesButtonDisabled(activeDateButton, time)}
          >
            {time}
          </DateTimeButton>
        ))}
      </div>
      <div className="h-full"></div>
      <Button size="lg" onClick={onNextClick} disabled={disabledConfirmButton}>
        Select Seat
      </Button>
    </div>
  );
}

export default SelectTimePage;
