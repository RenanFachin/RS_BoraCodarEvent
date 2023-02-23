import React from 'react'
import ReactDOM from 'react-dom/client'
import { Dashboard } from './pages/Dashboard'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className='bg-background w-full h-screen'>
      <Dashboard />
    </div>
  </React.StrictMode>,
)
