
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import { Toaster } from './components/ui/toaster'

function App() {

  return (
    <div>

      <Outlet />
      <Footer />
      <Toaster/>
    </div>
  )
}

export default App
