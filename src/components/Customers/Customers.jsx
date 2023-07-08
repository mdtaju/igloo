import React from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ImgTwo from '../../assets/images/amazon.png';
import ImgOne from '../../assets/images/cocacola.png';
import ImgThree from '../../assets/images/infosys.png';
import useWindowSize from '../../hooks/useWidth';
import CustomerCart from './CustomerCart';
const Customers = () => {
      const windowSize = useWindowSize()
      return (
            <div className='container mx-auto pb-[80px]'>
                  <h1 className='primary_title text-center mb-3'>Our Customers</h1>
                  <p className='primary_paragraph text-center mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, totam?</p>
                  <Swiper
                        slidesPerView={windowSize?.width > 768 ? 5 : 1}
                        spaceBetween={30}
                        modules={[Pagination, Autoplay]}
                        loop={true}
                        // pagination={{
                        //       clickable: true,
                        // }}
                        autoplay={{
                              delay: 100,
                              // disableOnInteraction: false,
                        }}
                        speed={1000}
                        className="mySwiper"
                  >
                        <SwiperSlide><CustomerCart Img={ImgOne} /></SwiperSlide>
                        <SwiperSlide><CustomerCart Img={ImgTwo} /></SwiperSlide>
                        <SwiperSlide><CustomerCart Img={ImgOne} /></SwiperSlide>
                        <SwiperSlide><CustomerCart Img={ImgTwo} /></SwiperSlide>
                        <SwiperSlide><CustomerCart Img={ImgThree} /></SwiperSlide>
                        <SwiperSlide><CustomerCart Img={ImgOne} /></SwiperSlide>
                        <SwiperSlide><CustomerCart Img={ImgTwo} /></SwiperSlide>
                        <SwiperSlide><CustomerCart Img={ImgOne} /></SwiperSlide>
                        <SwiperSlide><CustomerCart Img={ImgThree} /></SwiperSlide>
                        <SwiperSlide><CustomerCart Img={ImgTwo} /></SwiperSlide>
                        <SwiperSlide><CustomerCart Img={ImgOne} /></SwiperSlide>
                        <SwiperSlide><CustomerCart Img={ImgThree} /></SwiperSlide>
                  </Swiper>
            </div>
      );
};

export default Customers;