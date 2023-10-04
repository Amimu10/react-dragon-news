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
import Register from './components/Register/Register';
import AuthProvider from './components/Provider/AuthProvider';
import News from './components/News/News';
import PrivateRoute from './components/PrivateRote/PrivateRoute';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../public/data/news.json")
      },
      {
        path: "/news/:_id",
        element: <PrivateRoute><News></News></PrivateRoute>
      },
      {
      path: "/login",
      element: <Login></Login>
      },
      {
      path: "/register",
      element: <Register></Register>
      },

    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>
);