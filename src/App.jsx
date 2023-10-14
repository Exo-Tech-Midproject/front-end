import { Routes, Route } from "react-router-dom"
import { lazy, Suspense } from "react"
import LoginPatientTestingForm from "./components/LoginForm/LoginPatientTestingForm"
import AuthPatient from "./components/Auths/AuthPatient"
// import Loading from "./components/Loading/Loading"

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
const QACategories= lazy(() => import("./pages/QACategories"))
const QA= lazy(() => import("./pages/QA"))
const NotFound= lazy(() => import("./pages/NotFound"))

const ForgotPassword = lazy(() => import("./pages/ForgotPassword"))


const Loading = lazy(() => import("./components/Loading/Loading"))


const Group = lazy(() => import("./pages/Group"))


// const Chat = lazy(() => import('../src/pages/Chat'));

const App = () => {
  return (
    <div>
      {/* <Profile /></React.Suspense> */}
      <Routes>


        <Route path='/' element={<Suspense fallback={<Loading />}><Home /></Suspense>} />
        <Route path='/Login' element={<Suspense fallback={<Loading />}><Login /></Suspense>} />
        <Route path='/testlogin' element={<Suspense fallback={<Loading />}><LoginPatientTestingForm /></Suspense>} />
        <Route path='/Signup' element={<Suspense fallback={<Loading />}><Signup /></Suspense>} />
        <Route path='/About' element={<Suspense fallback={<Loading />}><AboutUs /></Suspense>} />
        <Route path='/dashboard/*' element={<AuthPatient><Suspense fallback={<Loading />}><Dashboard /></Suspense></AuthPatient>} />
        <Route path='/QACategories' element={<Suspense fallback={<Loading />}><QACategories /></Suspense>} />
        <Route path='/QA' element={<Suspense fallback={<Loading />}><QA /></Suspense>} />
        <Route path='/ForgotPassword' element={<Suspense fallback={<Loading />}><ForgotPassword /></Suspense>} />
        <Route path='/404' element={<Suspense fallback={<Loading />}><NotFound /></Suspense>} />
        
        {/* <Route path='/dashboard/chat' element={<Suspense fallback={<Loading />}><Chat /></Suspense>} /> */}

        {/* <Route path='/Group' element={<Suspense fallback={<Loading />}><Group /></Suspense>} /> */}

      </Routes>
    </div>
  )
}

export default App