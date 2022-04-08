import React, { Component, useEffect,useState} from 'react';
import { InfoProvider } from '../../context/Appcontext';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Restaurantbody from './components/restaurantbody';
import { KITCHENS_OF_PUNJAB } from './constants/restaurants';
import Actions from './constants/Action';
import store from '../../../redux/store';
import { Provider } from 'react-redux';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoginPage from './components/login';

function Restaurantpage() {
  
  return (
    <InfoProvider value={KITCHENS_OF_PUNJAB}>
    <Provider store ={store}>
      <Routes>
      <Route path = "/" element= {<><Navbar />
      <Restaurantbody />
      <Footer /></>} />
      
      <Route path = "/Login" element ={<LoginPage/>}/>
      </Routes>
      </Provider>
    </InfoProvider>
  );

}

export default Restaurantpage;