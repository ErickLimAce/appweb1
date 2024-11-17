import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use BrowserRouter instead of Router
import { routes } from './routes';

/**
 * The main component of the application that renders the routes.
 */
function App() {
  return (
    <Router>
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
