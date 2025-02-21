import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import routes from './Routes'

// Create a router that uses the client side history strategy for
const router = createBrowserRouter(routes)

function App() {
  return (
    <RouterProvider router={router} />
  )
}
export default App