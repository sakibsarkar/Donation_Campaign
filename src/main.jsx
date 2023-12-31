import Donation from "./Donation/Donation";
import DonationDetails from "./DonationDetails/DonationDetails";
import ErrorPage from "./ErrorPage/ErrorPage";
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
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/donation",
        element: <Donation></Donation>
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>
      },
      {
        path: '/donationDetails/:id',
        element: <DonationDetails></DonationDetails>,
        loader: () => fetch("https://sakibsarkar.github.io/Donation_api/donation_api.json"),
        errorElement: <ErrorPage></ErrorPage>
      },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}></RouterProvider>
  </React.StrictMode>,
)
