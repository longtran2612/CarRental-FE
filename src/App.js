import './App.css';
import {Route , Routes} from 'react-router-dom'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import BookingCar from './pages/BookingCar'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route  path='/'   element={<Home/>} />
        <Route  path='/login'   element={<Login/>} />
        <Route path='/register'   element={<Register/>} />
        <Route path='/bookingcar'   element={<BookingCar/>} />
        <Route path='*'   element={<NotFound/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
