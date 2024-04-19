import React, { FC } from 'react'
import Header from '../UI/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../UI/Footer/Footer'

const MainLayout: FC = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default MainLayout
