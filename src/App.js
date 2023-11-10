import React from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './Routes/Header/Header';
import Footer from './Routes/Footer/Footer';
function App() {
  return (
    <div className="App">
        <Header/>
      <main className="container py-5">
        <Outlet/>
      </main>
        <Footer/>
    </div>
  );
}

export default App;
