import React from 'react'
import ReactDOM from 'react-dom/client'
import { Details } from './pages/Details'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Details />
  </React.StrictMode>,
)
