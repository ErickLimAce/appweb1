import React from 'react';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import ReservasPage from './pages/ReservasPage';

export const routes = [
  { path: '/Login', element: <LoginPage />, label: 'Login' },
  { path: '/', element: <MainPage />, label: 'Main' },
  { path: '/Reservas', element: <ReservasPage />, label: 'Reservas' },
];
