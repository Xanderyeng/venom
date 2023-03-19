import React from "react";
import "./App.css";
import Hero from "./containers/Hero/Hero";
import Navbar from "./containers/Navbar/Navbar";
// import { Button } from '@mui/material';

const App = () => {
  return (
    <section className='App'>

    <Navbar/>
    <Hero/>


  </section>
  )
};

export default App;
