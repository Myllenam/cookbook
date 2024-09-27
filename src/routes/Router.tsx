import { createBrowserRouter, Navigate } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    lazy: async () => await import("../components/CommonLayout"),
    children: [
      {
        index: true, 
        lazy: async () => await import("../pages/Home"),
      },
      {
        path: "receitas",
        lazy: async () => await import("../pages/Recipes"),
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" />, 
  },
]);
