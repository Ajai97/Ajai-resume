import React from 'react'
import frontendImg from '../../assets/images/front-end.png'
import backendImg from '../../assets/images/backend.png'
import databaseImg from '../../assets/images/database.png'
import datascienceImg from '../../assets/images/datascience1.png'
import datavisualisationImg from '../../assets/images/datavisualisation.png'
import {Swiper,SwiperSlide } from "swiper/react"
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { EffectCoverflow, Pagination, Navigation} from 'swiper/modules'
import "swiper/swiper-bundle.css"
import Img1 from '../../assets/swiperimg/java.png'
import Img2 from '../../assets/swiperimg/html1.png'
import Img3 from '../../assets/swiperimg/css1.jpg'
import Img4 from '../../assets/swiperimg/JavaScript-Symbol.png'
import Img5 from '../../assets/swiperimg/agile.jpg'
import Img6 from '../../assets/swiperimg/react1.png'
import Img7 from '../../assets/swiperimg/node.png'
import Img8 from '../../assets/swiperimg/mongodb.png'
import Img9 from  '../../assets/swiperimg/mysql.avif'
import Img10 from '../../assets/swiperimg/machinelearning.png'
import Img11 from  '../../assets/swiperimg/python.png'
import Img12 from '../../assets/swiperimg/tableau.png'
import Img13 from '../../assets/swiperimg/wordpress.png'
import Img14 from '../../assets/swiperimg/tailwindcss.jpg'
import Img15 from '../../assets/swiperimg/projectm.jpg'
import Img16 from '../../assets/swiperimg/c++.jpg'
import Img17 from '../../assets/swiperimg/azure.png'





const Services = () => {
   
  return (
   <section id='skills' className='bg-img bg-slate-200 '>
    <div className='container lg:pt-5'>
        <div className='text-center'>
            <h2 className=' text-headingColor font-[800] text-[2.4rem] mb-5'>
                What do I Help
                </h2> 
                <p className='lg:max-w-[600px] lg:mx-auto text-headingColor font-[500] text-[16px] leading-7'>
                Full Stack Developer looking to work in an organization that can provide a variety of oppurtunities that allow me 
                to expand my skills and knowledge white working towards 
                achieving the organizational goals.
                </p>

        </div>
        <div className='flex flex-col justify-center sm:py-12'> 
        <div className='w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0'>
            <div className='relative text-grey-700 antialised text-sm text-semibold '>
                <div className='hidden absolute w-1 sm:block bg-indigo-300 h-full
                left-1/2 transform-translate-x-1/2'></div> 
                    <div className='mt-6 sm:mt-0 sm:mb-12 '>
                        <div className='flex items-center flex-col sm:flex-row'>
                            <div className='flex justify-start w-full mx-auto items-center'>
                                <div className='w-full sm:w-1/2 sm:pr-8'>
                                    <div 
                                    data-aos='fade-right' 
                                    data-aos-delay='100'
                                    data-aos-duration='1400'
                                    
                                    
                                    
                                    className=' button bg-white p-4 rounded
                                    shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150'>
                                        <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white 
                                        group-hover:font-[600] text-2xl'>Frontend Developer</h3>
                                        <p>A complete Development of frontend using frontend
                                             technologies like React.js,JavaScript,Html,CSS</p>

                                    </div>

                                </div>

                            </div>
                            <div className='rounded-full bg-black border-white border-4 w-10 h-10
                            absolute right-1/2 transform translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center
                            justify-center'>
                                <figure>
                                    <img src={frontendImg} alt=""/> 
                                    </figure> 

                            </div>

                        </div>

                    </div>
                    {/* right card*/}
                    <div className='mt-6 sm:mt-0 sm:mb-12 '>
                        <div className='flex items-center flex-col sm:flex-row'>
                            <div className='flex justify-end w-full mx-auto items-center'>
                                <div className='w-full sm:w-1/2 sm:pl-8'>
                                    <div
                                      data-aos='fade-left' 
                                      data-aos-delay='100'
                                      data-aos-duration='1400'
                                       className=' button bg-white p-4 rounded
                                    shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150'>
                                        <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white 
                                        group-hover:font-[600] text-2xl'>Backend Developer</h3>
                                        <p>A complete Development of backend using backend
                                             technologies like Java,SpringBoot,Node.js,Express.js</p>

                                    </div>

                                </div>

                            </div>
                            <div className='rounded-full bg-black border-white border-4 w-10 h-10
                            absolute right-1/2 transform translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center
                            justify-center'>
                                <figure>
                                    <img src={backendImg} alt=""/> 
                                    </figure> 

                            </div>

                        </div>

                    </div>
                    <div className='mt-6 sm:mt-0 sm:mb-12 '>
                        <div className='flex items-center flex-col sm:flex-row'>
                            <div className='flex justify-start w-full mx-auto items-center'>
                                <div className='w-full sm:w-1/2 sm:pr-8'>
                                    <div
                                      data-aos='fade-right' 
                                      data-aos-delay='100'
                                      data-aos-duration='1400'
                                       className=' button bg-white p-4 rounded
                                    shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150'>
                                        <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white 
                                        group-hover:font-[600] text-2xl'>Database Developer</h3>
                                        <p>Development of database and handling of databses 
                                            like RDBMS( SQL) NO-SQL( MongoDB )</p>

                                    </div>

                                </div>

                            </div>
                            <div className='rounded-full bg-white border-black border-4 w-10 h-10
                            absolute right-1/2 transform translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center
                            justify-center'>
                                <figure>
                                    <img src={databaseImg} alt=""/> 
                                    </figure> 

                            </div>

                        </div>

                    </div>
                    <div className='mt-6 sm:mt-0 sm:mb-12 '>
                        <div className='flex items-center flex-col sm:flex-row'>
                            <div className='flex justify-end w-full mx-auto items-center'>
                                <div className='w-full sm:w-1/2 sm:pl-8'>
                                    <div 
                                      data-aos='fade-left' 
                                      data-aos-delay='100'
                                      data-aos-duration='1400' 
                                      className=' button bg-white p-4 rounded
                                    shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150'>
                                        <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white 
                                        group-hover:font-[600] text-2xl'>Data Scientist</h3>
                                        <p>EDA ,Machine Learning, Tableau</p>

                                    </div>

                                </div>

                            </div>
                            <div className='rounded-full bg-white border-white border-4 w-10 h-10
                            absolute right-1/2 transform translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center
                            justify-center'>
                                <figure>
                                    <img src={datascienceImg} alt=""/> 
                                    </figure> 

                            </div>

                        </div>

                    </div>
                    <div className='mt-6 sm:mt-0 sm:mb-12 '>
                        <div className='flex items-center flex-col sm:flex-row'>
                            <div className='flex justify-start w-full mx-auto items-center'>
                                <div className='w-full sm:w-1/2 sm:pr-8'>
                                    <div 
                                      data-aos='fade-right' 
                                      data-aos-delay='100'
                                      data-aos-duration='1400'
                                      className=' button bg-white p-4 rounded
                                    shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150'>
                                        <h3 className='text-primaryColor font-[700] mb-3 group-hover:text-white 
                                        group-hover:font-[600] text-2xl'>Data Visualisation</h3>
                                        <p>Tableau & Advanced Excel</p>

                                    </div>

                                </div>

                            </div>
                            <div className='square-full bg-white border-black border-4 w-10 h-10
                            absolute right-1/2 transform translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center
                            justify-center'>
                                <figure>
                                    <img src={datavisualisationImg} alt=""/> 
                                    </figure> 

                            </div>

                        </div>

                    </div>

            </div>


        </div>

        </div>

    </div>
    
    <div className=' py-4 px-4  justify-content-center text-black font-[800]  '>
        <h1 className='flex items-center justify-content-center text-[2.4rem]'>Skill Set </h1>
        <Swiper className=' bg-slate-200 lg:w-[100.2%]'
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        spaceBetween={120}
        slidesPerView={3}
        coverflowEffect={{
            rotate:0,
            stretch:0,
            depth:100,
            modifier:2.5
        }} 
        pagination={{el:'.swiper-pagination', clickable: true}}
        navigation={{
            nextEl:'.swiper-button-next',
            prevEl:'.swiper-button-prev',
            clickable:true,
            

        }}
        modules={[EffectCoverflow,Pagination,Navigation]}>
            <SwiperSlide>
                <img   src={Img1} alt=""/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={Img2} alt=""/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={Img3} alt=""/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={Img4} alt=""/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={Img5} alt=""/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={Img6} alt=""/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={Img7} alt=""/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={Img8} alt=""/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={Img9} alt=""/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={Img10} alt=""/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={Img11} alt=""/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={Img12} alt=""/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={Img13} alt=""/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={Img14} alt=""/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={Img15} alt=""/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={Img16} alt=""/>
            </SwiperSlide>
            <SwiperSlide>
                <img src={Img17} alt=""/>
            </SwiperSlide>
            <div className='slide-controller'>
                <div className='swiper-button-prev slider-arrow arrow-black'>
                   
                </div>
                <div className='swiper-button-next slider-arrow'>
                    

                </div>
                <div className='swiper-pagination'></div>
                
            </div>
       
            
        </Swiper>
        
    </div>
    

   </section>
   
  )
}

export default Services