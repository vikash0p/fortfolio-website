import React,{useState} from 'react'
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Resume from './components/Resume';
import Testimonial from './components/Testimonial';
import { selectAllTheme } from './features/ModeSlice';



const App = () => {
 
 
 const mode= useSelector(selectAllTheme)
 
 const light={
  background:"#E5E0FF",
  color:"black"
 }
 const dark={
    background :"#4E6E81",
    color:"white"
 }


  return (
    <>
   
        
          <div style={mode? light:dark}>
          <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route exect path='/' element={<Header/> } />
            <Route exect path='/about' element={<About/>} />
            <Route exect path='/resume' element={  <Resume/> } />
            <Route exect path='/contact' element={  <Contact/> } />
            <Route exect path='/testimonial' element={  <Testimonial/> } />
          </Routes>
          </BrowserRouter>
        </div>

   
   
    
  
    </>
   
  )
}

export default App
