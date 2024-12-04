import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/rootLayout";
import SettingsRootLayout from "./pages/settingsRootLayout";
import OverviewPage from "./pages/overview";
import TourPage from "./pages/tour/tourPage";
import Users from "./pages/user/users";
import EditUser from "./pages/user/editUser";
import UserDetail from "./pages/user/userDetail";
import Bookings from "./pages/booking/bookings";
import BookingOnTour from "./pages/booking/bookingOnTour";
import Reviews from "./pages/review/reviews";
import ReviewOnTour from "./pages/review/reviewOnTour";
import Login from "./pages/authentication/login";
import Signup from "./pages/authentication/signUp";

import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <OverviewPage />,
      },
      {
        path: "tours",
        children: [
          {
            index: true,
            element: <OverviewPage />,
          },
          {
            path: ":tourId",
            element: <TourPage />,
          },
        ],
      },
      {
        path: "users",
        element: <SettingsRootLayout />,
        children: [
          {
            index: true,
            element: <Users />,
          },
          {
            path: ":userId",
            // element: <UserDetail />,
            children: [
              {
                index: true,
                element: <UserDetail />,
              },
              {
                path: "edit",
                element: <EditUser />,
              },
            ],
          },
        ],
      },
      {
        path: "reviews",
        element: <SettingsRootLayout />,
        children: [
          {
            index: true,
            element: <Reviews />,
          },
          {
            path: ":tourId",
            element: <ReviewOnTour />,
          },
        ],
      },
      {
        path: "bookings",
        element: <SettingsRootLayout />,
        children: [
          {
            index: true,
            element: <Bookings />,
          },
          {
            path: ":bookId",
            element: <BookingOnTour />,
          },
        ],
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signUp",
        element: <Signup />,
      },
      {
        path: "me",
        element: <SettingsRootLayout />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
