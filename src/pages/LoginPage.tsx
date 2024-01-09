import { useState } from 'react';
import Header from '../components/Header';
import DateTimeButton from '../components/DateTimeButton';
import Button from '../components/Button';

const timesA = ['12:00', '14:00', '16:00', '18:00'];
const timesB = ['20:00', '22:00', '00:00', '02:00'];

function LoginPage() {
  const [activeButton, setActiveButton] = useState('');
  return (
    <div className="flex flex-col bg-dark px-5 py-8 h-full place-content-between">
      <Header header={'Select Date & Time'}></Header>
      <span className="text-white-dimmed font-bold text-sm mt-6">DATE</span>
      <div className="grid grid-cols-4 gap-y-4 mt-4 w-full">
        <DateTimeButton dateTime={'Jan 09'}></DateTimeButton>
      </div>
      <hr className="h-px bg-white-heavy border-0 my-6"></hr>
      <span className="text-white-dimmed font-bold text-sm">TIME</span>
      <div className="flex w-full flex-wrap justify-between mt-4 gap-y-4">
        <div className="flex w-full justify-between">
        {timesA.map((time, idx) => (
            <DateTimeButton
              key={time}
              onClick={() => {
                setActiveButton(time);
              } }
              active={activeButton === time} dateTime={time}            >
              {time}
            </DateTimeButton>
          ))}
        </div>
        <div className="flex w-full justify-between">
          {timesB.map((time, idx) => (
            <DateTimeButton
              key={time}
              onClick={() => {
                setActiveButton(time);
              } }
              active={activeButton === time} dateTime={time}            >
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
