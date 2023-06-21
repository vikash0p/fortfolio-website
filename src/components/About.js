import React from 'react'
import img from '../images/about.jpg'

const About = () => {
    return (
        <>
            <div className="container-fluid" >
                <div className="row" id="aboutme">
                    <div className="col-12 col-sm-12 col-md-8 col-lg-6 mx-auto">
                        <div className='text-center mt-2'>
                            <h1>About  me</h1>
                            <hr className='w-50 m-auto ' style={{ background: "orange" }} />
                        </div>


                       
                            <div class="">
                                <p className='lead text-center mt-4'>Why choose me?</p>
                            </div>
                            

                                <img src={img} class="img-fluid" alt="images" />

                                <div className="d-flex justify-content-start justify-content-sm-between justify-content-md-between justify-content-lg-between mt-5">
                                    <span className='text-center'>
                                        <h3 className='bg-warning py-3 rounded-circle mx-2 mx-sm-2 mx-md-0 mx-lg-0 '>01+</h3>
                                        <p className="lead">Year  <br /> experinece</p>
                                    </span>
                                    <span className='text-center'>
                                    <h3 className='bg-warning py-3 rounded-circle mx-2 mx-sm-2 mx-md-0 mx-lg-0'>05+</h3>
                                        <p className="lead px-2">Complete  <br /> project</p>
                                    </span>
                                    <span className='text-center'>
                                    <h3 className='bg-warning py-3 rounded-circle mx-2 mx-sm-2 mx-md-0 mx-lg-0'>01+</h3>
                                        <p className="lead">Componies  <br /> worked</p>   
                                    </span>
                                </div>
                                <p class=" fs-5 mt-4 px-4">
                                    web developer with extensive knowledge and years of experience.<br />  working in webtechnologies and ui/ux
                                    design,delivering <br /> quality work.
                                </p>
                                
                                   <div className=''>
                                    <ul className='list-unstyled  '>
                                        <li>
                                        <h3 className='px-4'>Here are a few Highlights.</h3>
                                        </li>
                                        <li>
                                        <p className='lead '> <i className="fa-solid fa-circle text-warning mx-4 "></i>Interactive frotend developer <span className=''>as per design</span></p>
                                        </li>
                                        <li>
                                        <p className='lead '> <i className="fa-solid fa-circle text-warning mx-4 "></i>JavaScript Frameworks eg.Reactjs & Nextjs</p>
                                        </li>
                                        <li>
                                        <p className='lead '> <i className="fa-solid fa-circle text-warning mx-4 "></i>Redux Redux-toolkit for state management</p>
                                        </li>
                                        <li>
                                        <p className='lead '> <i className="fa-solid fa-circle text-warning mx-4 "></i>Building REST API</p>
                                        </li>
                                        <li>
                                        <p className='lead '> <i className="fa-solid fa-circle text-warning mx-4 "></i>Cross-Browser Compatibility</p>
                                        </li>
                                        <li>
                                        <p className='lead '> <i className="fa-solid fa-circle text-warning mx-4 "></i>Performance Optimization</p>
                                        </li>
                                        <li>
                                        <p className='lead '> <i className="fa-solid fa-circle text-warning mx-4 "></i>Version Control and Collaboration</p>
                                        </li>
                                        <li>
                                        <p className='lead '> <i className="fa-solid fa-circle text-warning mx-4 "></i>Mobile-Friendly Development</p>
                                        </li>
                                        <li>
                                        <p className='lead '> <i className="fa-solid fa-circle text-warning mx-4 "></i>managing Database</p>
                                        </li>
                                        
                                    </ul>
                                   </div>
                                

                                <div className='px-4 m-5'>
                                <button className="btn btn-warning px-5 rounded-pill m-auto ">Download CV</button>
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

export default About
