import { BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './components/Routes/Routes'

const App = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  )
}

export default App
