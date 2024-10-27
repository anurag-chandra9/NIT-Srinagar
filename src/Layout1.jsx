import React from 'react'
import Header from './components/header/Header.jsx'
import Footer from './components/footer/Footer.jsx'
import { Outlet } from 'react-router-dom'
export default function Layout() {
  return (
   <>
   <Header/>
   <Outlet/>
   <Footer/>
    </>
  )
}
