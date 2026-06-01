import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import GaTracker from './components/GaTracker'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Search from './pages/Search'
import Product from './pages/Product'

function App() {
  return (
    <BrowserRouter basename="/test">
      <GaTracker />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="search" element={<Search />} />
          <Route path="product" element={<Product />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
