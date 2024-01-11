import React, { Children } from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { MdLocalMovies } from 'react-icons/md';
import { MdFavorite } from 'react-icons/md';
import { BsPersonFill } from 'react-icons/bs';

export type NavItem = {
  icon: JSX.Element;
  path: string;
};

export const navIcons: NavItem[] = [
  {
    icon: <FaHome />,
    path: '/home',
  },
  {
    path: '/movies',
    icon: <MdLocalMovies />,
  },
  {
    path: '/bookmarked-movies',
    icon: <MdFavorite />,
  },
  {
    path: '/profile',
    icon: <BsPersonFill />,
  },
];

function NavBar() {
  return (
    <nav className="fixed bottom-0 left-0">
      <ul className="flex justify-center gap-12 bg-dark items-center py-8 px-16">
        {navIcons.map((navIcons, index) => (
          <li key={index}>
            <NavLink
              to={navIcons.path}
              className={({ isActive }) =>
                isActive ? 'text-white' : 'text-white-dimmed'
              }
            >
              {navIcons.icon}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
