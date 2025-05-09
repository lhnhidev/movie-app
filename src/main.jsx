import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import HomePage from "./pages/HomePage.jsx";
import MovieDetails from "./pages/MovieDetails.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout.jsx";
import TvShowDetails from "./pages/TvShowDetails";
import ModalProvider from "@context/ModalProvider";
import PeoplePage from "./pages/PeoplePage";

const router = createBrowserRouter([
  {
    element: <RootLayout></RootLayout>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/movie/:id",
        element: <MovieDetails></MovieDetails>,
      },
      {
        path: "/tv/:id",
        element: <TvShowDetails></TvShowDetails>,
      },
      {
        path: "/people/:id",
        element: <PeoplePage></PeoplePage>,
        loader: async function ({ params }) {
          // console.log(params);
          const data = await fetch(
            `${import.meta.env.VITE_HOST}person/${params.id}`,
            {
              method: "GET",
              headers: {
                accept: "application/json",
                Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
              },
            },
          );
          return data;
        },
      },
    ],
  },
  {
    path: "/",
    element: <HomePage></HomePage>,
  },
  {
    path: "/movie/:id",
    element: <MovieDetails></MovieDetails>,
  },
  {
    path: "/tv/:id",
    element: <TvShowDetails></TvShowDetails>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ModalProvider>
      <RouterProvider router={router}></RouterProvider>
    </ModalProvider>
  </StrictMode>,
);
