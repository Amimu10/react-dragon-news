import React from 'react';
import * as ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from "./components/LayOut/MainlayOut";
import Home from "./components/Home/Home";
import MainLayOut from "./components/LayOut/MainlayOut"; 
import Login from './components/Login/Login';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children:[
      {
        path: "/",
        element: <Home></Home>
      },
      {
      path: "/login",
      element: <Login></Login>
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);