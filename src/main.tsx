import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React from "react";
import { App } from "./App";
import { CountryList } from "./pages/CountryList";
import { CoutryDetails } from "./pages/CoutryDetails";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <CountryList />
      },
      {
        path: '/detail/:id',
        element: <CoutryDetails />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")!)
.render(<React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>);
