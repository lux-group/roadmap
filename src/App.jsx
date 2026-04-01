import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import DirectoryPage from './pages/DirectoryPage'
import ProductPage from './pages/ProductPage'

export default function App() {
  return (
    <BrowserRouter basename="/roadmap">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/directory" element={<DirectoryPage />} />
          <Route path="/product/:slug" element={<ProductPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
