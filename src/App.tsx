import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './components/Pages/Home/Home'
import MainLayout from './components/layouts/MainLayout'
import Menu from './components/Pages/Menu/Menu'
import About from './components/Pages/About Us/About'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
