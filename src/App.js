import React from 'react';
import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/Home';
import Edu from './components/Education';
import Project from './components/Project';
import Skill from './components/Skill';
import Hobbies from './components/Hobbies';
import Footer from './Footer';


const App =()=>{

  return(
    <div>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/education" element={<Edu/>}/>
        <Route path="/project" element={<Project/>}/>
        <Route path="/skill" element={<Skill/>}/>
        <Route path="/hobbies" element={<Hobbies/>}/>
      </Routes>
      </Router>
      <Footer/>
      </div>
  )}
export default App;
