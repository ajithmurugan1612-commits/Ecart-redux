import { Route, Routes } from 'react-router-dom'
import './App.css'
import Products from './pages/Products'
import View from './Pages/View'
import Cart from './Pages/Cart'
import PageNotFound from './Pages/PageNotFound'
import Wishlist from './Pages/Wishlist'
import Header from './Components/Header'
import Footer from './Components/Footer'


function App() {
 

  return (
    <>
    <Header />
      <Routes>
        <Route path='/' element={<Products/>} />
        <Route path='/products/:id' element={<View/>} />
        <Route path='/wishlist' element={<Wishlist/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/*' element={<PageNotFound/>} />
      </Routes>
      <Footer />

    </>
  )
}

export default App
