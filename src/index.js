import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PersonalProfile from './components/PersonalProfile';
import Matches from './components/Matches';
import Home from './components/Home';
import Browse from './components/Browse';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/matches",
    element: <Matches />,
  },
  {
    path: "/profile",
    element: <PersonalProfile />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
  {
    path: "*",
    element: <div>404 NOT FOUND</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
