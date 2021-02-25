import React from 'react';
import './App.css';
import NavBar from "./components/navbar/navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



function App() {
  return (
    <>
    <Router>
      <NavBar />
    </Router>
    </>
  )
}

export default App;
