import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext';
import CartSidebar from './components/CartSidebar';

// Components import

// Pages import
import Home from './pages/Home'
import About from './pages/About'
import Shop from './pages/Shop'
import Header from './components/Header'
import Footer from './components/Footer'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import { WishlistProvider } from './context/WishlistContext';
import WishlistSidebar from './components/WishlistSidebar';
import Checkout from './pages/Checkout';
import OrderSuccess from './pages/OrderSuccess';
import ProductDetail from './pages/ProductDetail';
import InfoPage from './pages/InfoPage';
import Auth from './pages/Auth';
import Profile from './pages/Profile';
import Orders from './pages/Orders';
import { AuthProvider } from './context/AuthContext';

export default function App() {

  // const [cartCount, setCartCount] = useState(0);

  return (
    <AuthProvider>
      <CartProvider>
        <WishlistProvider>
          <Router>
            <div className="min-h-screen bg-[#faf9f6]">

              <Header />
              <CartSidebar />
              <WishlistSidebar />

              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path='/blog' element={<Blog />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path='/checkout' element={<Checkout />} />
                <Route path='order-success' element={<OrderSuccess />} />
                <Route path="/product/:productId" element={<ProductDetail />} />
                <Route path="/faq" element={<InfoPage />} />
                <Route path="/shipping" element={<InfoPage />} />
                <Route path="/privacy" element={<InfoPage />} />
                <Route path="/guide" element={<InfoPage />} />
                <Route path="/terms" element={<InfoPage />} />
                <Route path="/login" element={<Auth />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/orders" element={<Orders />} />
              </Routes>

              <Footer />

            </div>
          </Router>
        </WishlistProvider>
      </CartProvider>
    </AuthProvider>
  )
}