import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from './pages/HomePage.jsx'
import MovieDetails from './pages/MovieDetails.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage></HomePage>
  },
  {
    path: '/movie',
    element: <MovieDetails></MovieDetails>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} ></RouterProvider>
  </StrictMode>,
)
