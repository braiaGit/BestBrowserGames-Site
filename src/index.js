import React from 'react';
import {  createBrowserRouter,  RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import About from './Routes/About/About';
import Home from './Routes/Home/Home';
import GamesPage from './Routes/Games/GamesPage';
import LoginPage from './Routes/Login/LoginPage';
import RegisterPage from './Routes/Login/RegisterPage';
import AuthProvider from './context/AuthContext';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "about",
        element: <About/>,
      },
      {
        path: "games",
        element: <GamesPage/>,
      },
      {
        path: "login",
        element: <LoginPage/>,
      },
      {
        path: "register",
        element: <RegisterPage/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
  );

reportWebVitals();