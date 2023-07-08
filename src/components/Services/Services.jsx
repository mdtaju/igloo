import { faCloud, faDatabase, faServer, faShareNodes } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import ServicesCart from './ServicesCart';

const Services = () => {
      return (
            <div className='py-[120px] container mx-auto'>
                  {/* inner container */}
                  <div>
                        {/* title and des container */}
                        <div className='text-center space-y-4'>
                              <h1 className='primary_title'>Our Services</h1>
                              <p className='primary_paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus natus aliquid iusto molestiae perferendis autem eaque quaerat quasi exercitationem at?</p>
                        </div>
                        {/* carts outer container */}
                        <div className='w-full p-4 sm:p-0 md:w-[950px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-16 mt-12 md:mt-[80px]'>
                              <ServicesCart
                                    Icon={faDatabase}
                                    title={"Inmediate Attention"}
                                    description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus natus aliquid iusto molestiae perferendis autem eaque quaerat quasi exercitationem at?"}
                                    data-aos="zoom-in"
                                    // data-aos-offset="200"
                                    data-aos-delay="100"
                                    data-aos-duration="500"
                              // data-aos-easing="ease-in-out"
                              // data-aos-mirror="true"
                              // data-aos-once="false"
                              // data-aos-anchor-placement="top-center"
                              />
                              <ServicesCart
                                    Icon={faServer}
                                    title={"Inmediate Attention"}
                                    description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus natus aliquid iusto molestiae perferendis autem eaque quaerat quasi exercitationem at?"}
                                    data-aos-delay="400"
                                    data-aos-duration="500"
                              />
                              <ServicesCart
                                    Icon={faCloud}
                                    title={"Inmediate Attention"}
                                    description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus natus aliquid iusto molestiae perferendis autem eaque quaerat quasi exercitationem at?"}
                                    data-aos-delay="600"
                                    data-aos-duration="500"
                              />
                              <ServicesCart
                                    Icon={faShareNodes}
                                    title={"Inmediate Attention"}
                                    description={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus natus aliquid iusto molestiae perferendis autem eaque quaerat quasi exercitationem at?"}
                                    data-aos-delay="800"
                                    data-aos-duration="500"
                              />
                        </div>
                  </div>
            </div>
      );
};

export default Services;