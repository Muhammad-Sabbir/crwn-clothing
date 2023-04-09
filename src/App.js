// import logo from "./logo.svg";
import React from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom'; // We are using new version of react-router-dom, so previous methodds are deprecated, new link https://reactrouter.com/en/main/start/tutorial#adding-a-router
import './App.css';
import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => {
  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/hats',
    element: <HatsPage />,
  },
]);

function App() {
  return (
    <div>
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </div>
  );
}

export default App;
