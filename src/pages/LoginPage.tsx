import { useState } from 'react';
import Header from '../components/Header';
import DateTimeButton from '../components/DateTimeButton';
import Button from '../components/Button';
import { format, add, formatDistance, formatRelative, subDays } from 'date-fns';

const timesA = ['12:00', '14:00', '16:00', '18:00'];
const timesB = ['20:00', '22:00', '00:00', '02:00'];
const datesA: string[] = [];
const datesB: string[] = [];
const datesC: string[] = [];
const today = new Date();
const timeNow = format(today, 'H');
for (let x = 0; x < 4; x++) {
  datesA.push(format(add(today, { days: x }), 'dd MMM'));
}
for (let x = 4; x < 8; x++) {
  datesB.push(format(add(today, { days: x }), 'dd MMM'));
}
for (let x = 8; x < 12; x++) {
  datesC.push(format(add(today, { days: x }), 'dd MMM'));
}
console.log(timeNow);

function LoginPage() {
  const [activeDateButton, setActiveDateButton] = useState('');
  const [activeTimeButton, setActiveTimeButton] = useState('');
  return (
    <div className="flex flex-col bg-dark px-5 py-8 h-full place-content-between">
      <Header header={'Select Date & Time'}></Header>
      <span className="text-white-dimmed font-bold text-sm mt-6">DATE</span>
      <div className="flex w-full flex-wrap justify-between mt-4 gap-y-4">
      <div className="flex w-full justify-between">
        {datesA.map((date, idx) => (
          <DateTimeButton
            key={date}
            dateTime={date}
            onClick={() => {
              setActiveDateButton(date);
            }}
            active={activeDateButton === date}
          >
            {date}
          </DateTimeButton>
        ))}
        </div>
      <div className="flex w-full justify-between">
        {datesB.map((date, idx) => (
          <DateTimeButton
            key={date}
            dateTime={date}
            onClick={() => {
              setActiveDateButton(date);
            }}
            active={activeDateButton === date}
          >
            {date}
          </DateTimeButton>
        ))}
        </div>
      <div className="flex w-full justify-between">
        {datesC.map((date, idx) => (
          <DateTimeButton
            key={date}
            dateTime={date}
            onClick={() => {
              setActiveDateButton(date);
            }}
            active={activeDateButton === date}
          >
            {date}
          </DateTimeButton>
        ))}
        </div>
      </div>

      <hr className="h-0 border-t border-white-heavy my-6"></hr>

      <span className="text-white-dimmed font-bold text-sm">TIME</span>
      <div className="flex w-full flex-wrap justify-between mt-4 gap-y-4">
        <div className="flex w-full justify-between">
          {timesA.map((time, idx) => (
            <DateTimeButton
              key={time}
              onClick={() => {
                setActiveTimeButton(time);
              }}
              active={activeTimeButton === time}
              dateTime={time}
              disabled={time.slice(0,2)<=timeNow}
            >
              {time}
            </DateTimeButton>
          ))}
        </div>
        <div className="flex w-full justify-between">
          {timesB.map((time, idx) => (
            <DateTimeButton
              key={time}
              onClick={() => {
                setActiveTimeButton(time);
              }}
              active={activeTimeButton === time}
              dateTime={time}
            >
              {time}
            </DateTimeButton>
          ))}
        </div>
      </div>
      <div className="h-full"></div>
      <Button size={'lg'}>Select Seat</Button>
    </div>
  );
}

export default LoginPage;
