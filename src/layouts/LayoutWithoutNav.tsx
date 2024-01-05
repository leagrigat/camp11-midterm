import React from 'react';
import { Outlet } from 'react-router-dom';

function LayoutWithoutNav() {
  return (
    <main>
      <Outlet />
    </main>
  );
}

export default LayoutWithoutNav;
