import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './routes/Dashboard';
import './index.css';
import Logic from './routes/Logic';
import SuperToys from './routes/SuperToys';
import LastQuestion from './routes/LastQuestion';
import Rough from './routes/Rough';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
  },
  {
    path: '/logic',
    element: <Logic/>
  },
  {
    path: '/supertoys',
    element: <SuperToys/>
  },
  {
    path: '/lastquestion',
    element: <LastQuestion/>
  },
  {
    path: '/roughguide',
    element: <Rough/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
