import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import Signup from "./pages/signUp"
import Contact from "./pages/Contact"
import AboutUs from "./pages/AboutUs"


const App = () => {
  return (
    <div>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/About' element={<AboutUs />} />
        <Route path='/dashboard/*' element={<Dashboard />} />
      </Routes>
    </div>
  )
}

export default App