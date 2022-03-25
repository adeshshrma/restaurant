import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import OrderPage from './pages/OrderPage'

function App() {
  return (
    <div className='font-Roboto'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/orders' element={<OrderPage />} />
      </Routes>
    </div>
  )
}

export default App
