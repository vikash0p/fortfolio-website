import React from 'react'
import './Resume.css'
import { useSelector } from 'react-redux'
import { selectAllTheme } from '../features/ModeSlice'
import { NavLink } from 'react-router-dom'

const Resume = () => {
    const mode = useSelector(selectAllTheme)
    const light = {
        color: "white"
    }
    const dark = {
        color: 'black'
    }
    return (
        <>
            <div className="container" style={{ minHeight: "300px" }}>
                <div className="row mt-2">
                    <div className="col-10  m-auto shadow">
                        <div className='text-center'>
                            <h1 className='mt-2'>Resume</h1>
                            <hr className='w-25 bg-warning m-auto' />
                            <p className='lead mt-3'>My format bio Details</p>

                        </div>
                        <div className="row mt-5">


                            <div className="col-12 col-sm-12.col-md-4 col-lg-4 ">
                                <div className="nav flex-column nav-pills  me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                    <button style={mode ? dark : light} className="nav-link text-start  active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true"> <i className="fa-solid fa-user-graduate"></i> Education</button>
                                    <button style={mode ? dark : light} className="nav-link text-start   " id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false"> <i className="fa-sharp fa-solid fa-clock-rotate-left"></i> Work History</button>
                                    <button style={mode ? dark : light} className="nav-link text-start   " id="v-pills-disabled-tab" data-bs-toggle="pill" data-bs-target="#v-pills-disabled" type="button" role="tab" aria-controls="v-pills-disabled" aria-selected="false" > <i className="fa-solid fa-laptop-code"></i> Programming Skill</button>
                                    <button style={mode ? dark : light} className="nav-link text-start   " id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false"> <i className="fa-solid fa-chart-column"></i> project</button>
                                    <button style={mode ? dark : light} className="nav-link text-start  mb-5 " id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false"> <i className="fa-solid fa-palette"></i> Interest</button>
                                </div>
                            </div>


                            <div className="col-12 col-sm-12 col-md-6 col-lg-6">


                                <div className="tab-content " id="v-pills-tabContent">

                                    <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabIndex="0">
                                        <div className='mb-4'>
                                            <h5 style={{ color: "orange" }}>  <i className="fa-solid fa-circle text-warning"></i> UNIVERSITY OF IGNOU</h5>
                                            <h5 className='mx-4'>BACHLOR OF COMPUTER APPLICATION.</h5>
                                        </div>
                                        <div>
                                            <h5 style={{ color: "orange" }}>  <i className="fa-solid fa-circle text-warning"></i> HIGH SCHOOL</h5>
                                            <h5 className='mx-4'>GOVT MODEL PUBLIC HIGH SCHOOL</h5>
                                        </div>

                                    </div>
                                    <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabIndex="0">
                                        <div>
                                            <h5 style={{ color: "orange" }}>  <i className="fa-solid fa-circle text-warning"></i> MACHINE LEARNING AND ARTIFICIAL INTELIGENCE <div className='mx-4'>
                                                MICROSOFT PROJECT
                                            </div>

                                            </h5>
                                            <h5 className='mx-4'> Frontend Developer
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="v-pills-disabled" role="tabpanel" aria-labelledby="v-pills-disabled-tab" tabIndex="0">
                                        <h5 style={{ color: "orange" }}>  <i className="fa-solid fa-circle text-warning"></i> HTML</h5>
                                        <h5 style={{ color: "orange" }}>  <i className="fa-solid fa-circle text-warning"></i> CSS</h5>
                                        <h5 style={{ color: "orange" }}>  <i className="fa-solid fa-circle text-warning"></i> BOOTSTRAP</h5>
                                        <h5 style={{ color: "orange" }}>  <i className="fa-solid fa-circle text-warning"></i> JAVASCRIPT</h5>
                                        <h5 style={{ color: "orange" }}>  <i className="fa-solid fa-circle text-warning"></i> REACT</h5>
                                        <h5 style={{ color: "orange" }}>  <i className="fa-solid fa-circle text-warning"></i> REDUX</h5>
                                        <h5 style={{ color: "orange" }}>  <i className="fa-solid fa-circle text-warning"></i> NODE JS</h5>
                                    </div>
                                    <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabIndex="0">
                                        <div className=' mb-5'>
                                            <h5 style={{ color: "orange" }}>  <i className="fa-solid fa-circle text-warning"></i> PERSONAL PORTFOLO WEBSITE</h5>
                                            <h6 className="lead mx-4">Technologies used React js,Bootstrap, redux-toolkit</h6>
                                            <p className="lead mx-4">A personal portfolio website to showcase all my details and project at one place</p>
                                            <NavLink className=" fs-5 ms-4 py-0 link-dark" to="https://vikashp.netlify.app/" >Portfolio</NavLink>

                                        </div>
                                        <div className='mb-5'>
                                            <h5 style={{ color: "orange" }}>  <i className="fa-solid fa-circle text-warning px-1"></i>TODO APP</h5>
                                            <h6 className="lead mx-4">Technologies used React js,Bootstrap, redux-toolkit</h6>
                                            <p className="lead mx-4">This webiste is store your data in one app.</p>
                                            <NavLink className=" fs-5 ms-4 py-0 link-dark" to="https://tdoo.netlify.app/" >TodoApp</NavLink>
                                        </div>
                                        <div className='mb-5'>
                                            <h5 style={{ color: "orange" }}>  <i className="fa-solid fa-circle text-warning px-1"></i>E-COMMERCE WEBSITE</h5>
                                            <h6 className="lead mx-4">Technologies used React js,Bootstrap, redux-toolkit</h6>
                                            <p className="lead mx-4">Online  e-commerce websie for showcasing and selling products and add to cart</p>
                                            <NavLink className=" fs-5 ms-4 py-0 link-dark" to="https://showfit.netlify.app/" >E-commerce Website</NavLink>
                                        </div>
                                        <div className='mb-5'>
                                            <h5 style={{ color: "orange" }}>  <i className="fa-solid fa-circle text-warning px-1"></i>Youtube Clone</h5>
                                            <h6 className="lead mx-4">Technologies used React js,Bootstrap, redux-toolkit</h6>
                                            <p className="lead mx-4">React Youtube is a simple component  at integrating with the youtube Api...</p>
                                            <NavLink className=" fs-5 ms-4 py-0 link-dark" to="https://youtebe.netlify.app/" >YouTube Clone</NavLink>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab" tabIndex="0">
                                        <div>
                                            <h5 style={{ color: "orange" }}>  <i className="fa-solid fa-circle text-warning px-1"></i>Music</h5>
                                            <p className="lead mx-4">listening to soothing music is something i can never compromise with skimming throught spotifys pop songs charts is at time the bes stress reliever that i can get my hands on.</p>
                                        </div>
                                        <div>
                                            <h5 style={{ color: "orange" }}>  <i className="fa-solid fa-circle text-warning px-1"></i>Travelling</h5>
                                            <p className="lead mx-4">Travelling is the my next experience and some new think in the my jounary</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>




                    </div>
                </div>
            </div>
            <div className="container-fluid p-0">
                <div className="row m-0">
                    <div className="col p-0">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffa500" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>

                        </svg>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Resume
