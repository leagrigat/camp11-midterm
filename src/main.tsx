import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import Input from './components/Input';
import { FaRegUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";




ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <Input icon={<FaRegUser />} id='email' label='email' placeholder='"your@email.com"'/>
      <Input icon={<FaLock />} id='password' label='password' placeholder='Enter your Password'/>
      <Input icon={<IoSearch />} id='search' label='search' placeholder='Search' isRounded={true} />
  </React.StrictMode>
);
