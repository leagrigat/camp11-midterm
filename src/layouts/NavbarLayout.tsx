import React from 'react';
import { Outlet } from 'react-router-dom';

function NavbarLayout() {
  return (
    <div>
      <main>
        <Outlet />
      </main>
      <footer>
        <nav></nav>
      </footer>
    </div>
  );
}

export default NavbarLayout;
