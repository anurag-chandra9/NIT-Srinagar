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
import Civil from './components/Civil/Civil.jsx'
import Mech from './components/Mech/Mech.jsx'
import Ece from './components/Ece/Ece.jsx'
import Electrical from './components/Electrical/Electrical.jsx'
import Chemical from './components/Chemical/Chemical.jsx'
import Cs from './components/Cs/Cs.jsx'
import It from './components/It/It.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='/About1' element={<About1/>} />
      <Route path='/Academics' element={<Academics/>} />
      <Route path='user/:userid'element={<User/>}/>
      <Route path='/Announcement'element={<Announcement/>}/>
      <Route path='/Notes1'element={<Notes1/>}/>
      <Route path='/Civil'element={<Civil/>}/>
      <Route path='/Mech'element={<Mech/>}/>
      <Route path='/Ece'element={<Ece/>}/>
      <Route path='/Electrical'element={<Electrical/>}/>
      <Route path='/Chemical'element={<Chemical/>}/>
      <Route path='/Cs'element={<Cs/>}/>
      <Route path='/It'element={<It/>}/>
     
      

    </Route>
           
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)