import * as React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ChakraProvider } from '@chakra-ui/react'
import Home from './home'
import { loader as rootLoader } from './home'
import { loader as productsLoader } from './products'
import { loader as productLoader } from './slideshow'
import ErrorPage from './errorPage'
import { ProductDetail } from './productPage'
import {Products2 } from './products'
import Layout from './main'

const queryClient = new QueryClient()
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
        //loader: rootLoader(queryClient),
    },
    {
        path: "/products",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Products2 />,
                loader: productsLoader(queryClient),
            },
            {
                path: "product/:productId",
                element: <ProductDetail />,
                loader: productLoader(queryClient),
            },
        ],
    }
])
createRoot(document.getElementById('root')).render(
        <ChakraProvider>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router} />
            </QueryClientProvider>
        </ChakraProvider>
);
