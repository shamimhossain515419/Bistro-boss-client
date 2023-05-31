import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './Routes/Routes.jsx'
import { HelmetProvider } from 'react-helmet-async'
import Authprovider from './AuthProvider/Authprovider'

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <div className=' max-w-screen-xl mx-auto'>

    <HelmetProvider>
      <Authprovider>
        <React.StrictMode>
          <QueryClientProvider client={queryClient}>
            <RouterProvider router={Router}></RouterProvider>
          </QueryClientProvider>

        </React.StrictMode>,
      </Authprovider>

    </HelmetProvider>

  </div>

)
