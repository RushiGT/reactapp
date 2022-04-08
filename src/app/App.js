import React,{Component,useEffect,useState} from 'react';
import './App.css';
import Restaurantpage from './components/restaurantpage';
import { BrowserRouter as Router } from 'react-router-dom';
function App() {
 

  return (
    <div className="App">
      <Router>
      <Restaurantpage />
      </Router>
    </div>
  );
}


export default App;
