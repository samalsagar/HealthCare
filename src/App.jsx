import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import LayoutRoot from './LayoutRoot.jsx'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<LayoutRoot />}>
        <Route path='' element={<Home /> }/>
      </Route>
    )
  )

  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
