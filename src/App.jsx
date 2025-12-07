import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route,Links} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home.jsx';
import About from './components/About';
import NoteState from './context/notes/NoteState';
// import { Alert } from 'bootstrap';

const App = () => {
  return (
    <>
    <NoteState>
      <Router>
        <Navbar/>
        {/* <Alert message = "Smart way to keep your notes"/> */}
        <div className="container">

       
          <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path='/about' element = {<About/>}/>
          </Routes>
           </div>
        </Router>
      </NoteState>
    </>
  )
}

export default App