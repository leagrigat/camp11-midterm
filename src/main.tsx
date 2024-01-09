import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NavbarLayout from './layouts/NavbarLayout';
import LayoutWithoutNav from './layouts/LayoutWithoutNav';
import LoginPage from './pages/LoginPage';
import Homepage from './pages/Homepage';
import MoviesPage from './pages/MoviesPage';
import BookmarkedMoviesPage from './pages/BookmarkedMoviesPage';
import SingleMoviePage from './pages/SingleMoviePage';
import CastAndCrewPage from './pages/CastAndCrewPage';
import ReservationPage from './pages/ReservationPage';
import GenresPage from './pages/GenresPage';
import RegisterPage from './pages/RegisterPage';
import Header from './components/Header';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutWithoutNav />,
    children: [
      {
        index: true,
        element: <LoginPage />,
      },
      {
        path: 'genres',
        element: <GenresPage />,
      },
      {
        path: 'register',
        element: <RegisterPage />,
      },
    ],
  },
  {
    path: '/home',
    element: <NavbarLayout />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
    ],
  },
  {
    path: '/movies',
    element: <NavbarLayout />,
    children: [
      {
        index: true,
        element: <MoviesPage />,
      },
    ],
  },
  {
    path: '/movies',
    element: <LayoutWithoutNav />,
    children: [
      {
        path: ':movieId',
        element: <SingleMoviePage />,
        children: [
          {
            path: 'cast-crew',
            element: <CastAndCrewPage />,
          },
          {
            path: 'reservation',
            element: <ReservationPage />,
          },
        ],
      },
    ],
  },
  {
    path: '/bookmarked-movies',
    element: <NavbarLayout />,
    children: [
      {
        index: true,
        element: <BookmarkedMoviesPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className="flex flex-col h-screen">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
