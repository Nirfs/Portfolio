// Librairies
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { useState, useEffect } from 'react'

// Composants
import { Home } from '../pages/Home'
import { NotFound } from '../pages/NotFound'
import { Work } from '../pages/Work'
import { Layout } from '../pages/Layout'
import { getWork } from '../api/fetch'
import { Loader } from '../components/Loader'

// Définition des routes
const router = createBrowserRouter([
  {    
    path: '/',
    element: <Layout />,
    HydrateFallback: () => <Loader />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: getWork,
        HydrateFallback: () => null,
      },
      {
        path: 'work/:id', 
        element: <Work />,
        loader: getWork,
        HydrateFallback: () => null,
      },
      {
        path: '*', 
        element: <NotFound />,
      },
    ],
  },   
])

// Composant principal du router
export default function AppRouter() {
  return <RouterProvider router={router} />
}
