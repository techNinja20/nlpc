import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Landing from "./components/pages/Landing";
import Dashboard from "./components/pages/Dashboard";
import Signup from "./components/pages/Signup";
import Login from "./components/pages/Login";
import ErrorPage from "./components/pages/ErrorPage";
import Otp from "./components/pages/Otp";
import GlobalContext from "./components/shared/Context";
import { Provider } from "react-redux";
import store from "../src/components/redux/store";
import Count from "./components/pages/Count";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },
  {
    path: "/auth/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/auth/sign-up",
    element: <Signup />,
  },
  {
    path: "/auth/otp",
    element: <Otp />,
  },
  {
    path: "/count",
    element: <Count />,
  },
  {
    path: "/*",
    element: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalContext>
      <Provider store={store}>
        <ToastContainer />
        <RouterProvider router={router} />
      </Provider>
    </GlobalContext>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
