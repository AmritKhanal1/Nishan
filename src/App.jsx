import React from 'react'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router'
import { LayoutOne } from './layout/LayoutOne'
import { RouterProvider } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import { Analytics } from '@vercel/analytics/react';
import { ToastContainer } from 'react-toastify'
import SmoothScroll from './components/utils/SmoothScroll'
import PreloaderWrapper from './components/utils/PreloaderWrapper'
import Cursor from './components/Cursor'

export const App = () => {
  // ---------------Routing 
  const MyRoute = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path='/' element={<LayoutOne />}>
        <Route index element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Route>
    </Route>
  ))

  return (
    <>
      <SmoothScroll>
        <PreloaderWrapper>
          <Cursor />
          <RouterProvider router={MyRoute} />
        </PreloaderWrapper>

        <Analytics />
        <ToastContainer />
      </SmoothScroll>
    </>
  )
}

export default App

