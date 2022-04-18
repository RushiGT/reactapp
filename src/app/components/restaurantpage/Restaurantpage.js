import React, { Component, useEffect,useState} from 'react';
import Footer from './components/footer';
import Navbar from './components/navbar';
import RestaurantBody from './components/restaurantBody';
import store from '../../../redux/store';
import { Provider } from 'react-redux';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoginPage from './components/login';

function RestaurantPage() {
 
  return (
    <Provider store ={store}>
      <Routes>
      <Route path = "/" element= {<><Navbar />
      <RestaurantBody />
      <Footer /></>} />
      
      <Route path = "/Login" element ={<LoginPage/>}/>
      </Routes>
      </Provider>
 
  );

}

export default RestaurantPage;