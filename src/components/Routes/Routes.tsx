import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { ROUTES } from '../../utils/routes'
import MainLayout from '../layouts/MainLayout'
import Home from '../Pages/Home/Home'
import Menu from '../Pages/Menu/Menu'
import About from '../Pages/About Us/About'
import Basket from '../Pages/Basket/Basket'
import ProductPage from '../Pages/ProductPage/ProductPage'
import SignUpPage from '../Pages/SignUpPage/SignUpPage'
import LoginPage from '../Pages/LoginPage/LoginPage'

const AppRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path={ROUTES.MENU} element={<Menu />} />
        <Route path={ROUTES.ABOUT} element={<About />} />
        <Route path={ROUTES.BASKET} element={<Basket />} />
        <Route path={ROUTES.PRODUCT} element={<ProductPage />} />
        <Route path={ROUTES.REGISTER} element={<SignUpPage />} />
        <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
