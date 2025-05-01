import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './pages/HomePage.jsx'
import MovieDetails from './pages/MovieDetails.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './pages/RootLayout.jsx'

const router = createBrowserRouter([
  {
    element: <RootLayout></RootLayout>,
    children: [
      {
        path: '/',
        element: <HomePage></HomePage>
      },
      {
        path: '/movie/:id',
        element: <MovieDetails></MovieDetails>
      }
    ]
  },
  {
    path: '/',
    element: <HomePage></HomePage>
  },
  {
    path: '/movie/:id',
    element: <MovieDetails></MovieDetails>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} ></RouterProvider>
  </StrictMode>,
)
