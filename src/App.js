import './App.css';
import {Route , Routes} from 'react-router-dom'
import Header from 'components/Header';
import Footer from 'components/Footer';
import HomePage from 'features/home/Home';
import LoginPage from 'features/account/pages/LoginPage';
import RegistryPage from 'features/account/pages/RegistryPage';
import NotFound from 'components/NotFoundPage/NotFound';
import ProfilePage from 'features/profile';
import { setLogin } from 'app/globalSlice';

import { useDispatch } from "react-redux";
import React, { useEffect } from "react";
function App() {
  const dispatch = useDispatch();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) dispatch(setLogin(true));
    }, []);
  return (
    <div className="App">
      <Header/>
      <br></br>
      <Routes>
        <Route  path='/'   element={<HomePage/>} />
        <Route  path='/login'   element={<LoginPage/>} />
        <Route path='/register'   element={<RegistryPage/>} />
        {/* <Route path='/bookingcar'   element={<BookingCar/>} /> */}
        <Route path='/profile'   element={<ProfilePage/>} />
        <Route path='*'   element={<NotFound/>} />
      </Routes>
      <br></br>
      <Footer/>
    </div>
  );
}

export default App;
