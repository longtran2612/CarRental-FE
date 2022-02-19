import './App.css';
import {Route , Routes} from 'react-router-dom'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/Home'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import BookingCar from './pages/BookingCar'
import NotFound from './pages/NotFound'
import Profile from './pages/profile/Profile';
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route  path='/'   element={<Home/>} />
        <Route  path='/login'   element={<Login/>} />
        <Route path='/register'   element={<Register/>} />
        <Route path='/bookingcar'   element={<BookingCar/>} />
        <Route path='/profile'   element={<Profile/>} />
        <Route path='*'   element={<NotFound/>} />
      </Routes>
      <br></br>
      <Footer/>
    </div>
  );
}

export default App;
