import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './routes/Dashboard';
import './index.css';
import Logic from './routes/Logic';
import SuperToys from './routes/SuperToys';
import LastQuestion from './routes/LastQuestion';
import Rough from './routes/Rough';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCy-o-ba-fgBUhXg6544wCPfI3RY_IYH9Y",
  authDomain: "futurism-final.firebaseapp.com",
  projectId: "futurism-final",
  storageBucket: "futurism-final.appspot.com",
  messagingSenderId: "496302258495",
  appId: "1:496302258495:web:a393dd45f6b4155cb53b8a",
  measurementId: "G-4B6HYTPXXJ"
};

// Initialize Firebase
// eslint-disable-next-line
const app = initializeApp(firebaseConfig);

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
