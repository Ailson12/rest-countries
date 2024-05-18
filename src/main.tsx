import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import { CountryList } from "./pages/CountryList";
import { CountryDetails } from "./pages/CountryDetails";

const router = createBrowserRouter([
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

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
