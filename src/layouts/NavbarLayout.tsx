import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';

function NavbarLayout() {
  return (
    <div className="relative">
      <main className="h-full">
        <Outlet />
      </main>
      <footer className="flex justify-center">
        <NavBar />
      </footer>
    </div>
  );
}

export default NavbarLayout;
