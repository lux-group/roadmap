import { createBrowserRouter, RouterProvider, ScrollRestoration } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import DirectoryPage from './pages/DirectoryPage'
import ProductPage from './pages/ProductPage'

const router = createBrowserRouter(
  [
    {
      element: <Layout />,
      children: [
        { path: '/', element: <HomePage /> },
        { path: '/directory', element: <DirectoryPage /> },
        { path: '/product/:slug', element: <ProductPage /> },
      ],
    },
  ],
  { basename: '/roadmap' }
)

export default function App() {
  return <RouterProvider router={router} />
}
