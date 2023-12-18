import React from 'react';
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Login from '../pages/Login/Login';
import Home from '../pages/Home/Home';
import Consumer from '../pages/Consumer/Consumer';
import Shop from '../pages/Shop/Shop';
import Hygiene from '../pages/Hygiene/Hygiene';
import Stackholder from '../pages/Stackholder/Stackholder';
import Recycler from '../pages/Recy/Recycler';  



const Routes = () => {
    const user = localStorage.getItem("user");

    const router = user?createBrowserRouter([
       {
              path: '/',
              element: <MainLayout />,
                children: [
                    { path: '/consumer', element: <Consumer/> },
                    { path: '/', element: <Home/> },
                    { path: '/login', element: <Login/> },
                    { path: '/shop', element: <Shop/> },
                    { path: '/hygiene', element: <Hygiene/> },
                    { path: '/stackholder', element: <Stackholder/> },
                    {path: '/recycler', element: <Recycler/>}
                    
                ]
       }
    ])
    :
    createBrowserRouter([
        {
               path: '/',
               element: <MainLayout />,
                 children: [
                     { path: '/', element: <Home/> },
                     { path: '/login', element: <Login/> },
                     {path: '*', element: <h1>Not Found</h1>}
                 ]
        }
     ])

    return (
        <RouterProvider router={router}>
        </RouterProvider>
    )
}

export default Routes;
