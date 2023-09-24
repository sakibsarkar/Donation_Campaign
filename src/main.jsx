import Donation from "./Donation/Donation";
import DonationDetails from "./DonationDetails/DonationDetails";
import Home from "./Home/Home";
import MainLayout from "./MainLayout/MainLayout";
import React from "react";
import ReactDOM from "react-dom/client";
import Statistics from "./Statistics/Statistics";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/Donation",
        element: <Donation></Donation>
      },
      {
        path: "/Statistics",
        element: <Statistics></Statistics>
      },
      {
        path: '/donationDetails/:id',
        element: <DonationDetails></DonationDetails>,
        loader: () => fetch("Data.json")
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}></RouterProvider>
  </React.StrictMode>,
)
