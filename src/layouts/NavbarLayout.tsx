import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';

function NavbarLayout() {
  return (
    <div>
      <main className="h-full">
        <Outlet />
      </main>
      <footer>
        <NavBar />
      </footer>
    </div>
  );
}

export default NavbarLayout;
