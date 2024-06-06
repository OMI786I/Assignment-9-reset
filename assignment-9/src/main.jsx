import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./Components/Root.jsx";
import Home from "./Components/Home.jsx";
import Login from "./Components/Login.jsx";
import Register from "./Components/Register.jsx";
import AuthProvider from "./Components/AuthProvider.jsx";
import DetailsInner from "./Components/DetailsInner.jsx";
import PrivateRoute from "./Components/PrivateRoute.jsx";
import Wishlist from "./Components/Wishlist.jsx";
import UpdatePro from "./Components/UpdatePro.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/update",
        element: (
          <PrivateRoute>
            <UpdatePro></UpdatePro>
          </PrivateRoute>
        ),
      },
      {
        path: "/data/:id",
        element: (
          <PrivateRoute>
            <DetailsInner></DetailsInner>
          </PrivateRoute>
        ),
        loader: () => fetch(`/data.json`),
      },
      {
        path: "/wishlist",
        element: (
          <PrivateRoute>
            <Wishlist></Wishlist>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
