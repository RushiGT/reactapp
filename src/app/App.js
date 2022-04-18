import React,{Component,useEffect,useState} from 'react';
import './App.css';
import RestaurantPage from './components/restaurantPage';
import { BrowserRouter as Router } from 'react-router-dom';
function App() {
 

  return (
    <div className="App">
      <Router>
      <RestaurantPage />
      </Router>
    </div>
  );
}


export default App;
