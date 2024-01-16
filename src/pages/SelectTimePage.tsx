import { useState } from 'react';
import Header from '../components/Header';
import DateTimeButton from '../components/DateTimeButton';
import Button from '../components/Button';
import { format, add } from 'date-fns';

//1 array mit 8 times und grid
const timesA = ['09:15', '09:45', '15:00', '17:30'];
const timesB = ['19:00', '20:30', '22:00', '23:30'];

//1 Array mit 12 items und grid
const datesA: string[] = [];
const datesB: string[] = [];
const datesC: string[] = [];

//needs to stay
const today = new Date();
const hourNow = format(today, 'H');
const minuteNow = format(today, 'mm');

for (let x = 0; x < 4; x++) {
  datesA.push(format(add(today, { days: x }), 'dd MMM'));
}
for (let x = 4; x < 8; x++) {
  datesB.push(format(add(today, { days: x }), 'dd MMM'));
}
for (let x = 8; x < 12; x++) {
  datesC.push(format(add(today, { days: x }), 'dd MMM'));
}

function SelectTimePage() {
  function mapDates(mapArr: string[]) {
    return mapArr.map(date => (
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
    ));
  }

  function mapTimes(mapArr: string[]) {
    return mapArr.map(time => (
      <DateTimeButton
        key={time}
        onClick={() => {
          setActiveTimeButton(time);
        }}
        active={activeTimeButton === time}
        dateTime={time}
        //disabled kann eventuell raus
        disabled={
          !activeDateButton ||
          (activeDateButton === format(today, 'dd MMM') &&
            (Number(time.slice(0, 2)) < Number(hourNow) ||
              (Number(time.slice(0, 2)) === Number(hourNow) &&
                Number(time.slice(3, 5)) <= Number(minuteNow))))
        }
      >
        {time}
      </DateTimeButton>
    ));
  }
  const [activeDateButton, setActiveDateButton] = useState('');
  const [activeTimeButton, setActiveTimeButton] = useState('');
  return (
    <div className="flex flex-col bg-dark px-5 py-8 h-full place-content-between">
      <Header header={'Select Date & Time'}></Header>
      <span className="text-white-dimmed font-bold text-sm mt-6">DATE</span>
      <div className="flex w-full flex-wrap justify-between mt-4 gap-y-4">
        <div className="flex w-full justify-between">{mapDates(datesA)}</div>
        <div className="flex w-full justify-between">{mapDates(datesB)}</div>
        <div className="flex w-full justify-between">{mapDates(datesC)}</div>
      </div>

      <hr className="h-0 border-t border-white-heavy my-6"></hr>

      <span className="text-white-dimmed font-bold text-sm">TIME</span>
      <div className="flex w-full flex-wrap justify-between mt-4 gap-y-4">
        <div className="flex w-full justify-between">{mapTimes(timesA)}</div>
        <div className="flex w-full justify-between">{mapTimes(timesB)}</div>
      </div>
      <div className="h-full"></div>
      <Button size="lg">Select Seat</Button>
    </div>
  );
}

export default SelectTimePage;
