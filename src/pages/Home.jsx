import React from 'react';
import BlogImgOne from "../assets/images/home_blog_1.png";
import ChatBoot from '../components/ChatBoot';
import Customers from '../components/Customers/Customers';
import Footer from '../components/Footer/Footer';
import HomeBlogLeftImg from '../components/HomeBlogLeftImg';
import Layout from '../components/Layout';
import PricingPlane from '../components/PricingPlane/PricingPlane';
import Services from '../components/Services/Services';
import Slider from '../components/Slider';
import SliderCarts from '../components/SliderCarts/SliderCarts';
import UpNavigateBtn from '../components/UpNavigateBtn';
import UploadFile from '../components/UploadFile';

const Home = () => {
      return (
            <Layout>
                  <Slider />
                  <SliderCarts />
                  <Services />
                  <PricingPlane />
                  <HomeBlogLeftImg
                        Img={BlogImgOne}
                        title={"Custom Backup Solutions"}
                        subtitle={"FIRST OF ALL"}
                        description={"We provide both ready-made and custom backup solutions. Our team of experts will give advice and consultancy to help you find the best backup option for your needs. You have full control over your data with our user management tools."}
                  />
                  {/* <HomeContactLink /> */}
                  <UpNavigateBtn />
                  <ChatBoot />
                  <UploadFile />
                  <Customers />
                  <Footer />
            </Layout>
      );
};

export default Home;