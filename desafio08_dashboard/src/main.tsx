import React from 'react'
import ReactDOM from 'react-dom/client'
import { Dashboard } from './pages/Dashboard'
import './styles/global.css'
import { ThemeContextProvider } from './contexts/ThemeContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div className='dark:bg-background bg-gray-200 w-full h-screen'>
      <ThemeContextProvider>
        <Dashboard />
      </ThemeContextProvider>
    </div>
  </React.StrictMode>,
)
