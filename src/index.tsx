import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { setupStore } from './store'
import App from './App'
import './generalStyles/index.css'
import './utils/firebase'

const store = setupStore()

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
