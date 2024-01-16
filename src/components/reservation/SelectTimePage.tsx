import { useState } from 'react';
import Header from '../Header';
import DateTimeButton from '../DateTimeButton';
import Button from '../Button';
import { format, add } from 'date-fns';

const timesA = ['09:15', '09:45', '15:00', '17:30']; // vergangene Zeit soll disabled sein - hardcoded Zeiten für Filmvorstellungen
const timesB = ['19:00', '20:30', '22:00', '23:30'];
const datesA: string[] = [];
// datesTest could replace three single arrays datesA, B and C
/* const datesTest = Array.from({ length: 12 }, (_, index) =>
  format(add(today, { days: index }), 'dd MMM')
); */
// map over datesTest and return components for each. Use grid to layout into three throws instead of using 3 different arrays
const datesB: string[] = [];
const datesC: string[] = [];
const today = new Date();
const hourNow = format(today, 'H');
const minuteNow = format(today, 'mm');
console.log(timesA[0].slice(0, 2), hourNow); // I would remove console.logs
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
  // keep function outside or use arrow functions or map inside return statement (so that useState stuff is defined before it's used)
  // to map directly, we need one array instead of multiple.
  function mapDates(mapArr: string[]) {
    {
      //klammer zu viel
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
  }

  // lieber unten mappen und dann direkt component mit reinsetzen anstatt die Funktion aufzurufen
  function mapTimes(mapArr: string[]) {
    return mapArr.map(time => (
      <DateTimeButton
        key={time}
        onClick={() => {
          setActiveTimeButton(time);
        }}
        active={activeTimeButton === time}
        dateTime={time}
        // write own function for activeButton condition?
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
      {/* need no {} */}
      <Header header={'Select Date & Time'}></Header>
      <span className="text-white-dimmed font-bold text-sm mt-6">DATE</span>
      {/* make grid out of this and map directly in here */}
      <div className="flex w-full flex-wrap justify-between mt-4 gap-y-4">
        <div className="flex w-full justify-between">{mapDates(datesA)}</div>
        <div className="flex w-full justify-between">{mapDates(datesB)}</div>
        <div className="flex w-full justify-between">{mapDates(datesC)}</div>
      </div>

      <hr className="h-0 border-t border-white-heavy my-6"></hr>

      <span className="text-white-dimmed font-bold text-sm">TIME</span>
      {/* make grid out of this and map directly in here */}
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
