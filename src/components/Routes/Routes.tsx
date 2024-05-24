import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Home from '../Pages/Home/Home'
import Menu from '../Pages/Menu/Menu'
import About from '../Pages/About Us/About'
import Basket from '../Pages/Basket/Basket'
import { ROUTES } from '../../utils/routes'
import ProductPage from '../Pages/ProductPage/ProductPage'

const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path={ROUTES.MENU} element={<Menu />} />
        <Route path={ROUTES.ABOUT} element={<About />} />
        <Route path={ROUTES.BASKET} element={<Basket />} />
        <Route path={ROUTES.PRODUCT} element={<ProductPage />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
