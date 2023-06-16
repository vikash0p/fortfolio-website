import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { selectAllTheme, toggleTheme } from '../features/ModeSlice'
import './Navbar.css'



const Navbar = () => {
    const mode=useSelector(selectAllTheme)
    const dispatch = useDispatch()
    const light={
       
        color:"black"
       }
       const dark={
         
          color:"white"
       }
       const lightbutton={
        background:"black",
        color:"white"
        
        
       }
       const darkbutton={
        background:"white",
        color:'black'
        
       }

    return (
        <>
            <nav className="navbar navbar-expand-lg sticky-top " >
                <div className="container-fluid">
                    <NavLink className="navbar-brand fs-4 mx-0 mx-sm-0 mx-md-5  mx-lg-5" to="/"  style={mode ? light:dark}>Vikash</NavLink>
                   
                    <button id="navButton" className=' align-items-center border border-3  border-warning rounded-pill px-2 m-0 m-sm-0  mx-md-5 mx-lg-5'onClick={()=>dispatch(toggleTheme())}  >
                        {
                            mode ? <div>
                                     <i className="fa-solid fa-sun text-warning mx-1 "></i>
                                     <i className="fa-solid fa-circle text-warning "></i>
                            </div>
                           :
                           <div>
                                 <i className="fa-sharp fa-solid text-warning px-1 fa-moon"></i>
                                 <i className="fa-solid fa-circle text-warning"></i>
                           </div>
                            
                        }
                    </button>

                    <button  style={mode ? lightbutton:darkbutton} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon text-danger "></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" id='homepage' aria-current="page" to="/"  style={mode? light:dark}>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" id="aboutme" to="/about"  style={mode? light:dark}>About Me</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/resume"  style={mode? light:dark}>Resume</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact"  style={mode? light:dark}>Contact</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/testimonial"  style={mode? light:dark}>Testimonial</NavLink>
                            </li>
                           

                        </ul>

                    </div>


                </div>
            </nav>
        </>

    )
}

export default Navbar
