import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter as Router, Route} from "react-router-dom";
import FoodCard from "./FoodCard";
import BuyNowCard from "./BuyNowCard";


// import {connect, Provider} from 'react-redux';
// import store from './store'
function App() {
  return (
    <Router>
    <div className="App">
      <header className="">
      </header>
      <Route exact path="/list" component={FoodCard}/>
      <Route exact path="/list/buy/:id" component={BuyNowCard}/>
    </div>
    </Router>
  );
}

export default App;
