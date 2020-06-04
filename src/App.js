import React from 'react';
import Home from "./components/Home";
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import JumBotron from "./components/Jumbotron"



// import './App.css';

function App() {
  return (
    <div className="App">
      
        <NavBar/>
        <JumBotron title="jumbotitle"/>
      
        <Home />
        <Footer/>
     
    </div>
  );
}

export default App;
