import './App.css';
import {Route , Routes} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import BookingCar from './pages/BookingCar'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route  path='/'   element={<Home/>} />
        <Route  path='/login'   element={<Login/>} />
        <Route path='/register'   element={<Register/>} />
        <Route path='/bookingcar'   element={<BookingCar/>} />
        <Route path='*'   element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
