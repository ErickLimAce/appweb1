import React from 'react';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';

export const routes = [
  { path: '/', element: <LoginPage />, label: 'Login' },
  { path: '/Main', element: <MainPage />, label: 'Main' },
];
