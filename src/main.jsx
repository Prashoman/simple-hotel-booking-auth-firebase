import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './route/Route'
import ContexProvider from './ContexProvider/ContexProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContexProvider>
      <RouterProvider router={router} />
    </ContexProvider>
  
  </React.StrictMode>,
)
