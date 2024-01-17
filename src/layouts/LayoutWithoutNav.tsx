import { Outlet } from 'react-router-dom';

function LayoutWithoutNav() {
  return (
    <main className="h-full">
      <Outlet />
    </main>
  );
}

export default LayoutWithoutNav;
