import { App } from "@/App";
import { CountryList } from "@/pages/CountryList";
import { CountryDetails } from "@/pages/CountryDetails";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <CountryList />,
      },
      {
        path: "/detail/:ccn3",
        element: <CountryDetails />,
      },
    ],
  },
]);
