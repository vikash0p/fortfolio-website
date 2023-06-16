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
import { useEffect } from 'react';
import { PacmanLoader} from 'react-spinners';

const App = () => {
  const[loading,setLoading]=useState(false)
  const[color ,setColor]=useState('')
  useEffect(()=>{
    setColor("orange");
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    }, 8000)
  },[])
 
 const mode= useSelector(selectAllTheme)
 
 const light={
  background:"white",
  color:"black"
 }
 const dark={
    background :"black",
    color:"white"
 }


  return (
    <>
      {
        loading  ? 
        <div id='loader'>
            <PacmanLoader color={color} loading={loading} size={50}  />
        </div>:
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

      }
   
    
  
    </>
   
  )
}

export default App
