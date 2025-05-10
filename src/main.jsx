import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "@pages/RootLayout.jsx";
import ModalProvider from "@context/ModalProvider";

const HomePage = React.lazy(() => import('@pages/HomePage.jsx'));
const MovieDetails = React.lazy(() => import('@pages/MovieDetails.jsx'));
const TvShowDetails = React.lazy(() => import('@pages/TvShowDetails.jsx'));
const PeoplePage = React.lazy(() => import('@pages/PeoplePage.jsx'));
const SearchPage = React.lazy(() => import('@pages/SearchPage'));

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
      {
        path: "/search",
        element: <SearchPage></SearchPage>,
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
