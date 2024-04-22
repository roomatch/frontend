import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

const rootElement = document.getElementById('root')

ReactDOM.createRoot(rootElement as Element)?.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
