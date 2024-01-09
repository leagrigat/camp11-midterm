import React from 'react';
import Header from '../components/Header';
import Button from '../components/Button';

function LoginPage() {
  return <div className='flex flex-col bg-dark px-5 pt-8 h-full'><Header header={'Select Date & Time'}></Header><Button></Button></div>;
}

export default LoginPage;