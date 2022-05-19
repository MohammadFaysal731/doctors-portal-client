import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import ContactUs from './Pages/ContactUs/ContactUs';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import SignUp from './Pages/Login/SignUp/SignUp';
import Review from './Pages/Review/Review';
import Header from './Pages/Shared/Header/Header';
import NotFund from './Pages/Shared/NotFund/NotFund';
import RequireAuth from './Pages/Shared/RequireAuth/RequireAuth';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import { ToastContainer } from 'react-toastify';
import MyAppointments from './Pages/Dashboard/MyAppointments.js/MyAppointments';
import MyReview from './Pages/Dashboard/MyReview/MyReview';
import MyHistory from './Pages/Dashboard/MyHistroy/MyHistory';
import Users from './Pages/Dashboard/Users/Users/Users';
import RequireAdmin from './Pages/Shared/RequireAdmin/RequireAdmin';




function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/appointment' element={
          <RequireAuth>
            <Appointment></Appointment>
          </RequireAuth>
        }></Route>
        <Route path='/dashboard' element={<RequireAuth> <Dashboard></Dashboard></RequireAuth>}>
          <Route index element={<MyAppointments></MyAppointments>}></Route>
          <Route path='review' element={<MyReview></MyReview>}></Route>
          <Route path='history' element={<MyHistory></MyHistory>}></Route>
          <Route path='users' element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
        </Route>
        <Route path='/review' element={<Review></Review>}></Route>
        <Route path='/contact' element={<ContactUs></ContactUs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFund></NotFund>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
