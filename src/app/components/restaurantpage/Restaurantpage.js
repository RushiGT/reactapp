import React, { Component, useEffect,useState} from 'react';
import { InfoProvider } from '../../context/Appcontext';
import Footer from './components/footer';
import Navbar from './components/navbar';
import Restaurantbody from './components/restaurantbody';
import { KITCHENS_OF_PUNJAB } from './constants/restaurants';
import Actions from './constants/Action';
import store from '../../../redux/store';
import { Provider } from 'react-redux';

function Restaurantpage() {
  
  return (
    <InfoProvider value={KITCHENS_OF_PUNJAB}>
    <Provider store ={store}>

      <Navbar />
      <Restaurantbody />
      <Footer />
      </Provider>

    </InfoProvider>
  );
}

export default Restaurantpage;