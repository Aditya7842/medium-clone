
import './index.css'
import Home from './Home'
import OurStory from './OurStory'
import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home/>} />
      <Route path="ourStory" element={<OurStory />} />
    </>
  )
)

function App(){
  return(

    <RouterProvider router={router}/>


  )
}

export default App
