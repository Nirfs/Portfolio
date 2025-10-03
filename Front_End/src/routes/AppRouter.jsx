//Librairies
import {createBrowserRouter, RouterProvider } from 'react-router-dom';
//Composants
import { Home } from '../pages/Home';
import { NotFound } from '../pages/NotFound';
import { Work } from '../pages/Work';
import { Layout }  from '../pages/Layout';
import { getWork } from '../api/fetch';

const router = createBrowserRouter([
    {    
        path: '/',
        element: <Layout />,
        children:[
            {
                index:true,
                element:<Home/>,
                loader: getWork,
                HydrateFallback: () => null
            },
            {
                path:'work/:id', 
                element:<Work/>,
                loader: getWork,
                HydrateFallback: () => null
            },
            {
                path:'*', 
                element:<NotFound/>
            },
        ],

    },   
])

export default function AppRouter() {
    return (
    <RouterProvider
      router={router}
    />
  );
}