import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./components/root";
import ErrorPage from "./error-page";
import Contact from "./components/contact";
import { getContactsLoader } from "./loaders/getContectsLoader";
import { createContactAction } from "./actions/createContactAction";
import { getContactLoader } from "./loaders/getContactLoader";
import EditContact from "./components/Edit";
import { updatedContactAction } from "./actions/updatedContactAction";
import { deleteContactAction } from "./actions/deleteAction";
import Index from "./components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: getContactsLoader,
    action: createContactAction,
    children: [
      {
        index:true,
        element: <Index/>
      },
      {
        path: 'contacts/:contactId',
        element: <Contact/>,
        loader: getContactLoader,
      },
      {
        path: 'contacts/:contactId/edit',
        element: <EditContact/>,
        loader: getContactLoader,
        action: updatedContactAction,
      },
      {
        path: 'contacts/:contactId/destroy',
        action: deleteContactAction,
        errorElement: <div>Ops! There was an error.</div>
      }
  ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
