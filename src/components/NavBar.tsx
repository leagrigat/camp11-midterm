import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { MdLocalMovies } from 'react-icons/md';
import { MdFavorite } from 'react-icons/md';
import { BsPersonFill } from 'react-icons/bs';

const navIcons = [
  {
    icon: <FaHome />,
    path: '/home',
    current: true,
  },
  {
    path: '/movies',
    icon: <FaHome />,
  },
];

function NavBar() {
  return (
    <nav>
      <ul className="flex justify-center gap-12 bg-dark items-center py-8 px-16">
        <li>
          <NavLink to="/">
            <FaHome className="fill-white-dimmed w-[24px] h-[24px]" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/movies">
            <MdLocalMovies className="fill-white-dimmed w-[24px] h-[24px] rotate-90 visited:fill-white" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/bookmarked-movies">
            <MdFavorite className="fill-white-dimmed w-[24px] h-[24px]" />
          </NavLink>
        </li>
        <li>
          <NavLink to="">
            <BsPersonFill className="fill-white-dimmed w-[24px] h-[24px]" />
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
