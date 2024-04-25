import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './components/Pages/Home/Home'
import MainLayout from './components/layouts/MainLayout'
import Menu from './components/Pages/Menu/Menu'
import About from './components/Pages/About Us/About'
import Basket from './components/Pages/Basket/Basket'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="about" element={<About />} />
          <Route path="basket" element={<Basket />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
