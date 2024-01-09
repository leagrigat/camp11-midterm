import React from 'react';
import Header from '../components/Header';
import Button from '../components/Button';

function LoginPage() {
  return <div className='flex flex-col bg-dark px-5 py-8 h-full place-content-between'><Header header={'Select Date & Time'}></Header><span className='text-white-dimmed font-bold text-sm'>DATE</span><hr className='h-px bg-white-heavy border-0'></hr><span className='text-white-dimmed font-bold text-sm'>TIME</span><Button>Select Seat</Button></div>;
}

export default LoginPage;