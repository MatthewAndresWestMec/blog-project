import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Main from './pages/Main'
import Blog from './pages/Blog'
import Edit from './pages/Edit'
import Login from './pages/Login'
import Register from './pages/Register'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "/edit",
    element: <Edit/>,
  },
  {
    path: "/main",
    element: <Main/>,
  },
  {
    path: "/blog",
    element: <Blog/>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);