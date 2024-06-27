import React from 'react';
import HomePage from '../../pages/home';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  // {
  //   path: "/services",
  //   element: <ServicesPage />,
  // },
  // {
  //   path: "/about",
  //   element: <AboutPage />,
  // },
  // {
  //   path: "/login",
  //   element: <LoginPage />,
  // },
  // {
  //   path: "*",
  //   element: <ErrorPage />,
  // },
]);

export const Routes = () => {
  return <RouterProvider router={router} />
}