import React from 'react';
import Banner from '../assets/images/banner.jpg';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import SlideImgOne from '../assets/images/slider-img-1.png';
import SlideImgTwo from '../assets/images/slider-img-2.png';

const Slider = () => {
      return (
            <div style={{ backgroundImage: `url(${Banner})` }} className={`w-full h-[600px] md:h-[500px] bg-no-repeat bg-cover bg-center px-6`}>
                  <Swiper
                        navigation={false}
                        loop={true}
                        pagination={{ clickable: true }}
                        // scrollbar={{ draggable: true }}
                        slidesPerView={1}
                        modules={[Navigation, Autoplay]}
                        className="mySwiper w-full h-full mx-auto"
                        autoplay={{
                              delay: 3000,
                              disableOnInteraction: false,
                        }}
                  >
                        <SwiperSlide className='container mx-auto p-4 md:p-10'>
                              {/* slide inner container */}
                              <div className='w-full h-full items-center justify-center flex flex-col-reverse md:flex-row gap-6 md:gap-[200px]'>
                                    {/* title container */}
                                    <div
                                          className='w-fit h-fit'>
                                          <h1
                                                className='text-gray-300 font-bold text-sm'>NEW EXPERIENCE</h1>
                                          <h1 className='text-gray-100 font-medium text-3xl md:text-6xl my-2'>Protect Your Data <br />With Cloud igloo</h1>
                                          <button className='primary_btn_light mt-4'>Get Started</button>
                                    </div>
                                    {/* image container */}
                                    <div
                                          className='w-fit h-fit'>
                                          <img
                                                src={SlideImgOne} alt="slide-img-one" className='w-full h-full max-h-[200px] md:max-h-[300px] object-contain' />
                                    </div>
                              </div>
                        </SwiperSlide>
                        <SwiperSlide>
                              {/* slide inner container */}
                              <div className='w-full h-full items-center justify-center flex flex-col md:flex-row gap-6 md:gap-[200px]'>
                                    {/* slide image container */}
                                    <div
                                          className='w-fit h-fit'>
                                          <img src={SlideImgTwo} alt="slide-img-one" className='w-full h-full max-h-[200px] md:max-h-[300px] object-contain' />
                                    </div>
                                    {/* slide title container */}
                                    <div
                                          className='w-fit h-fit'>
                                          <h1 className='text-gray-300 font-bold text-sm'>NEW EXPERIENCE</h1>
                                          <h1 className='text-gray-100 font-medium text-3xl md:text-6xl my-2'>Protect Your Data <br />With Cloud igloo</h1>
                                          <button className='primary_btn_light mt-4'>Get Started</button>
                                    </div>
                              </div>
                        </SwiperSlide>
                  </Swiper>
            </div>
      );
};

export default Slider;