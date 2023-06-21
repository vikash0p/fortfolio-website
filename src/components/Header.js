import React from 'react'
import './Header.css'
import img from '../images/men.png'
import resume from '../images/Resume.pdf'
import ReactTyped from 'react-typed'
import { NavLink } from 'react-router-dom'




const Header = () => {
    return (
        <>
            <div className="container-fluid" >
                <div className="row " id="homepage" >
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 px-2 px-sm-2 px-md-4 px-lg-5 mt-4 mt-sm-4 m5-md-0 m5-lg-0  align-self-center " >
                        <div className=''>

                            <h1 className="headerfont">Hello! i Am  <br />
                                <div className='headerfont text-warning'>


                                    <ReactTyped strings={['Vikash Pandat', 'Web Developer', "React Developer"]}
                                        typeSpeed={40}
                                        backDelay={200}
                                        backSpeed={90}
                                        loop={true}
                                    />

                                </div>
                            </h1>

                            <p className="lead">Proficient in HTML5, CSS3, JavaScript,Bootstrap and related frontend technologies.</p>
                            <p className="lead">Strong knowledge of modern JavaScript frameworks such as React js and Nextjs.</p>
                            <p className="lead">Experience with responsive design and building mobile-friendly websites. Solid understanding of UI/UX
                                principles and best practices.
                            </p>
                            <p className="lead">Familiarity with version control systems like Git and code collaboration tools like GitHub. Ability to work
collaboratively in a team environment and effectively communicate with designers, developers, and
stakeholders.</p>
                            <p className="lead">Strong analytical and problem-solving skills with a keen attention to detail.
</p>
                            <p className="lead">Excellent time management and organizational abilities, ensuring timely delivery of projects.</p>
                            <p className="lead"></p>
                            <a href={resume} download>
                                <button className="btn btn-warning px-5 rounded-pill fs-5 mt-4">Hire me</button>
                            </a>

                            <div className="d-flex gap-5 mt-5">
                                <a href="https://github.com/vikash0p">
                                    <i className=" fs-1 text-warning fa-brands fa-github"></i>
                                </a>
                                <a href="https://www.linkedin.com/in/vikash-pandit-97a00a181">
                                    <i className=" fs-1 text-warning fa-brands fa-linkedin"></i>
                                </a>
                                <a href="https://www.instagram.com/v_pandat000">
                                    <i className=" fs-1 text-warning fa-brands fa-square-instagram"></i>
                                </a>
                                <a href="https://www.facebook.com/vikashPanditJi00">
                                    <i className=" fs-1 text-warning fa-brands fa-square-facebook"></i>
                                </a>

                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 " id='svgimage'>

                        <div className=''>
                            <img src={img} alt="image" id="headerImage" className='mx-auto d-block ' />
                        </div>
                    </div>

                </div>
            </div>
            <div className="container-fluid p-0">
                <div className="row m-0">
                    <div className="col p-0">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffa500" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
