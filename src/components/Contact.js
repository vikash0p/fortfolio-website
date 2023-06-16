import React, { useEffect, useState } from 'react'
import img from '../images/contact.svg'
import './Contact.css'

const Contact = () => {
    const [visible, setVisible] = useState(false);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState("");
    const onSubmithandler = (e) => {
        e.preventDefault();
    }
    const handleToggle = () => {
        setVisible(!visible)

    }
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 m-auto shadow mt-5">
                        <div className="text-center">
                            <h1 className='mt-4'>contact us</h1>
                            <hr className='w-25 m-auto bg-warning' />
                        </div>
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-6 col-6">
                                {/* <img src={img} alt="" className='img-fluid' height={'500px'} /> */}
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-6 align-self-center">

                                <form onSubmit={onSubmithandler}>
                                    <h4 className='text-center m-3'>Register</h4>
                                    <div className="m-3">
                                        <label htmlFor="name" className="form-label">Name</label>
                                        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} className="form-control rounded-0" id="name" placeholder="Name" />
                                    </div>

                                    <div className="m-3">
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control rounded-0" id="email" placeholder="Email" />
                                    </div>

                                    <div className="m-3">
                                        <label htmlFor="password" className="form-label">password</label>
                                        <div className="position-relative">
                                            <input type={visible ? "text" : "password"} name='password' value={password} onChange={(e) => setPassword(e.target.value)} className="form-control rounded-0" id="password" placeholder="password" />
                                            <label htmlFor="password" onClick={handleToggle}>
                                                {
                                                    visible ? <i className="fa-solid fa-eye position-absolute top-0 end-0 px-3 py-2 text-dark "></i> : <i className="text-dark fa-solid fa-eye-slash position-absolute top-0 end-0 px-3 py-2"></i>
                                                }
                                            </label>
                                        </div>

                                    </div>

                                    <div className="d-grid m-4">
                                        <button type='submit' className="btn btn-warning rounded-pill col-md-8 m-auto fs-5">Submit</button>

                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>
            <div className="container-fluid p-0">
                <div className="row m-0">
                    <div className="col p-0">
                    <div >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffa500" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
