import React from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
// import CardOfGames from './Routes/Home/CardOfGames';
import Header from './Routes/Header/Header';
// import LoginSection from './Routes/Login/LoginSection';
// import WelcomeCard from './Routes/Home/WelcomeCard';
// import Sobre from './Routes/Sobre/Sobre';
function App() {
  return (
    <div className="App">
      <Header/>
      <Outlet/>
      
    </div>
  );
}

export default App;
