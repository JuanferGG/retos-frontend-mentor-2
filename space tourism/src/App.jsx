import * as React from 'react'
import { AnimatePresence } from 'framer-motion'
import { useLocation, useRoutes } from 'react-router-dom'


import './App.css'
import { Home } from './Pages/Home/Home'
import { Crew } from './Pages/Crew/Crew'
import { Technology } from './Pages/Technology/Technology'
import { DestinationPage } from './Pages/Destination/Destination'

function App() {
  const element = useRoutes([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/destination',
      element: <DestinationPage />
    },
    {
      path: '/crew',
      element: <Crew />
    },
    {
      path: '/technology',
      element: <Technology />
    }
  ])

  const location = useLocation()
  
  if(!element) return null

  return (
    <AnimatePresence mode='wait' initial={false} >
      {React.cloneElement(element, { key: location.pathname } )}
    </AnimatePresence>
  )
}

export default App
