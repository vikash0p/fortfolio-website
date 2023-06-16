import React from 'react'
import img from '../images/man.png'
import './Testimonial.css'

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation,Scrollbar,A11y,EffectFade,Thumbs } from "swiper";

import "swiper/swiper.min.css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useSelector } from 'react-redux';
import { selectAllTheme } from '../features/ModeSlice';





const Testimonial = () => {
  const theme=useSelector(selectAllTheme)
  const light={
    background:"white",
    color:"black"
  }
  const dark={
    background:"black",
    color:"white"
  }
  return (
    <>
      <div className="container" style={{ }}>
        <div className="row" style={{ minHeight: "80vh" }}>
          <div className="col-12 .col-sm-12.col-md-10 col-lg-10 m-auto  align-self-center">
            <h1 className=''>Happy Client Works</h1>
            <hr className='w-50 bg-warning' />
            <Swiper
            // effect='fade'
              // slidesPerView={2}
              // spaceBetween={25}
              centeredSlides={true}
              fade={true}
              loop={true}
              grabCursor={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false
              }}

              pagination={{
                clickable: true,
                dynamicBullets: true
              }}
              navigation={true}
              modules={[Pagination, Navigation,Scrollbar,A11y,EffectFade ]}
              breakpoints={{
                0:{
                  slidesPerView:1,
                  spaceBetween:10,
                },
                790:{
                  slidesPerView:2,
                  spaceBetween:10,
                },
                

              }}
              className="mySwiper"
                

            >

              <SwiperSlide>
                <div className="card border border-warning shadow" style={theme?light:dark}>
                  <div className="card-body   ">
                
                    <p className="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae assumenda doloremque voluptatibus id quia inventore iure, magnam placeat harum dolores non facere facilis expedita commodi nam accusamus fugiat doloribus necessitatibus!
                    </p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                  </div >
                    <div className='d-flex justify-content-center gap-3'>
                    <img src={img} className="" alt="images" width={'60px'} height={"60px"} />
                  <div className='align-item-center'>
                    <h5 className='m-0 mt-2'>Vikash</h5>
                    <p >Developer</p>
                  </div>
                </div>
                    </div>
                
              </SwiperSlide>
              <SwiperSlide>
                <div className="card border border-warning shadow" style={theme?light:dark}>
                  <div className="card-body  ">
                
                    <p className="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae assumenda doloremque voluptatibus id quia inventore iure, magnam placeat harum dolores non facere facilis expedita commodi nam accusamus fugiat doloribus necessitatibus!
                    </p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                  </div >
                    <div className='d-flex justify-content-center gap-3'>
                    <img src={img} className="" alt="images" width={'60px'} height={"60px"} />
                  <div className='align-item-center'>
                    <h5 className='m-0 mt-2'>Vikash</h5>
                    <p >Developer</p>
                  </div>
                </div>
                    </div>
                
              </SwiperSlide>
              <SwiperSlide>
                <div className="card border border-warning shadow" style={theme?light:dark}>
                  <div className="card-body  ">
                
                    <p className="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae assumenda doloremque voluptatibus id quia inventore iure, magnam placeat harum dolores non facere facilis expedita commodi nam accusamus fugiat doloribus necessitatibus!
                    </p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                  </div >
                    <div className='d-flex justify-content-center gap-3'>
                    <img src={img} className="" alt="images" width={'60px'} height={"60px"} />
                  <div className='align-item-center'>
                    <h5 className='m-0 mt-2'>Vikash</h5>
                    <p >Developer</p>
                  </div>
                </div>
                    </div>
                
              </SwiperSlide>
              <SwiperSlide>
                <div className="card border border-warning shadow" style={theme?light:dark}>
                  <div className="card-body  ">
                
                    <p className="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae assumenda doloremque voluptatibus id quia inventore iure, magnam placeat harum dolores non facere facilis expedita commodi nam accusamus fugiat doloribus necessitatibus!
                    </p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                  </div >
                    <div className='d-flex justify-content-center gap-3'>
                    <img src={img} className="" alt="images" width={'60px'} height={"60px"} />
                  <div className='align-item-center'>
                    <h5 className='m-0 mt-2'>Vikash</h5>
                    <p >Developer</p>
                  </div>
                </div>
                    </div>
                
              </SwiperSlide>
              <SwiperSlide>
                <div className="card border border-warning shadow" style={theme?light:dark}>
                  <div className="card-body  ">
                
                    <p className="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae assumenda doloremque voluptatibus id quia inventore iure, magnam placeat harum dolores non facere facilis expedita commodi nam accusamus fugiat doloribus necessitatibus!
                    </p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                  </div >
                    <div className='d-flex justify-content-center gap-3'>
                    <img src={img} className="" alt="images" width={'60px'} height={"60px"} />
                  <div className='align-item-center'>
                    <h5 className='m-0 mt-2'>Vikash</h5>
                    <p >Developer</p>
                  </div>
                </div>
                    </div>
                
              </SwiperSlide>
              <SwiperSlide>
                <div className="card border border-warning shadow" style={theme?light:dark}>
                  <div className="card-body  ">
                
                    <p className="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae assumenda doloremque voluptatibus id quia inventore iure, magnam placeat harum dolores non facere facilis expedita commodi nam accusamus fugiat doloribus necessitatibus!
                    </p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                  </div >
                    <div className='d-flex justify-content-center gap-3'>
                    <img src={img} className="" alt="images" width={'60px'} height={"60px"} />
                  <div className='align-item-center'>
                    <h5 className='m-0 mt-2'>Vikash</h5>
                    <p >Developer</p>
                  </div>
                </div>
                    </div>
                
              </SwiperSlide>

            </Swiper>
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

export default Testimonial
