import { Routes, Route, useLocation } from "react-router-dom"
import { lazy, Suspense } from "react"
import LoginPatientTestingForm from "./components/LoginForm/LoginPatientTestingForm"
import AuthPatient from "./components/Auths/AuthPatient"
import LoginPhysicianTestingForm from "./components/LoginForm/LoginDoctorTestingForm"
import { io } from "socket.io-client"
// import Loading from "./components/Loading/Loading"
import { AnimatePresence } from "framer-motion"
import './App.css'
// import Home from "./pages/Home"

// import Login from "./pages/Login"
// import Dashboard from "./pages/Dashboard"
// import Signup from "./pages/signUp"
// import Contact from "./pages/Contact"
// import AboutUs from "./pages/AboutUs"
// import Loading from '../src/components/Loading/Loading';
const Home = lazy(() => import("./pages/Home"))
const Login = lazy(() => import("./pages/Login"))
const Dashboard = lazy(() => import("./pages/Dashboard"))
const Signup = lazy(() => import("./pages/signUp"))
const AboutUs = lazy(() => import("./pages/AboutUs"))
const QACategories = lazy(() => import("./pages/QACategories"))
const QA = lazy(() => import("./pages/QA"))
const NotFound = lazy(() => import("./pages/NotFound"))

const ForgotPassword = lazy(() => import("./pages/ForgotPassword"))


const Loading = lazy(() => import("./components/Loading/Loading"))


const Group = lazy(() => import("./pages/Group"))


const socket = io('https://healthak.onrender.com/');

const connectSocket = (userData) => {
  socket.connect();
  socket.emit('enter chat', userData);
};

const disconnectSocket = (roomName) => {
  socket.disconnect();
  socket.emit('leave-room', roomName)
};

export { socket, connectSocket, disconnectSocket };
// const Chat = lazy(() => import('../src/pages/Chat'));

const App = () => {
  const location = useLocation()
  return (
    <div>
      <AnimatePresence>
        <Routes location={location} key={location.pathname}>




          <Route path='/' element={<Suspense fallback={<Loading />}><Home /></Suspense>} />
          <Route path='/Login' element={<Suspense fallback={<Loading />}><Login /></Suspense>} />
          <Route path='/testlogin' element={<Suspense fallback={<Loading />}><LoginPatientTestingForm /></Suspense>} />
          <Route path='/testlogin2' element={<Suspense fallback={<Loading />}><LoginPhysicianTestingForm /></Suspense>} />
          <Route path='/Signup' element={<Suspense fallback={<Loading />}><Signup /></Suspense>} />
          <Route path='/AboutUs' element={<Suspense fallback={<Loading />}><AboutUs /></Suspense>} />




          <Route path='/dashboard/*' element={<Suspense fallback={<Loading />}><Dashboard /></Suspense>} />
          <Route path='/QACategories' element={<Suspense fallback={<Loading />}><QACategories /></Suspense>} />

          <Route path='/QA' element={<Suspense fallback={<Loading />}><QA /></Suspense>} />
          <Route path='/ForgotPassword' element={<Suspense fallback={<Loading />}><ForgotPassword /></Suspense>} />

          <Route path='/404' element={<Suspense fallback={<Loading />}><NotFound /></Suspense>} />





          {/* <Route path='/dashboard/chat' element={<Suspense fallback={<Loading />}><Chat /></Suspense>} /> */}


          {/* <Route path='/dashboard/chat' element={<Suspense fallback={<Loading />}><Chat /></Suspense>} /> */}

          {/* <Route path='/Group' element={<Suspense fallback={<Loading />}><Group /></Suspense>} /> */}

        </Routes>
      </AnimatePresence>
      {/* <Profile /></React.Suspense> */}

    </div>
  )
}

export default App