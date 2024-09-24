import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AddProd from './addProd.jsx'
import App from './App.jsx'
import GetProd from './getProd.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <AddProd />
    <h1>Todos los productos: </h1>
    <GetProd />
  </StrictMode>,
)
