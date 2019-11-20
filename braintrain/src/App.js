import React from 'react';
import {
  BrowserRouter as Router,  
  Route  
} from "react-router-dom";

import './App.css';
import "./components/braintrain/Tile.css";
import Menu from "./components/braintrain/Menu";
import Help from "./components/braintrain/Help";
import BrainTrain from './components/braintrain/BrainTrain';

function App() {
  return (

    <div className="App"
      style={{ backgroundColor: "white" }}>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
        integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
        crossOrigin="anonymous"
      />
      <Menu />            
      <br></br>
      <Router>     
        <Route exact={true} path="/playgame" component={BrainTrain} />
        <Route exact={true} path="/help" component={Help} />
      </Router>
    </div>
  );
}

export default App;
