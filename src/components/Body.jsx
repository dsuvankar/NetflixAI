import React from "react";
import LogIn from "./LogIn";
import Header from "./Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./Browse";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <LogIn />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
