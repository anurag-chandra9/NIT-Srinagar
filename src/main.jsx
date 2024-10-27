import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout1.jsx'
import Home from './components/Home/Home.jsx'
import About1 from './components/About1/About1.jsx'
import Academics from './components/Academics/Academics.jsx'
import User from './components/User/user.jsx'
import Announcement from './components/Announcement/Announcement.jsx'
import Notes1 from './components/Notes1/Notes1.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='About1' element={<About1/>} />
      <Route path='/ Academics' element={<Academics/>} />
      <Route path='user/:userid'element={<User/>}/>
      <Route path='/Announcement'element={<Announcement/>}/>
      <Route path='/Notes1'element={<Notes1/>}/>
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)