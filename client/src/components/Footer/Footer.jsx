import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className='bg-[#12141e] pt-12'>
      <div className='container'>
        <div className='sm:flex items-center justify-between md:gap-8'>
          <div className='w-full sm:w-1/2'>
            <h2 className='text-[26px] leading-10 text-white font-[600] mb-5 md:text-[2rem]'>
              Do you want to make beutiful Websites?
            </h2>
            <a href='AJAI KULKARNI CV.pdf' download='AJAI KULKARNI CV.pdf'>
                            <button className=' button bg-primaryColor text-white font-[500] flex items-center gap-2
                            hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]'>
                                <i class="ri-mail-line"></i>
                                {""}
                            Hire Me {" "}
                            </button>

                        </a>

          </div>
          <div className='w-full sm:w-1/2'>
            <p className='text-gray-300 leading-7 mt-4 sm:mt-0'>
              Experinced Web developer having knowledge of web development in mern Stack
            </p>
            <div className='flex items-center gap-4 flex-wrap md:gap-18 mt-10'>
              <span className='text-gray-300 text-[15px] font-[600]'>
                Follow Me:
              </span>
              <span className='button w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center ' >
                <a href='https://www.youtube.com/channel/UC27uRFOULQW5zHdH21TABLQ' className=' text-gray-300 font-[500] text-[18px] '>
                <i class="ri-youtube-line"></i>
                </a>

              </span>
              <span className='button w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center ' >
                <a href='https://github.com/Ajai97' className=' text-gray-300 font-[500] text-[18px] '>
                <i class="ri-github-line"></i>
                </a>

              </span>
              <span className=' button w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center ' >
                <a href='https://www.linkedin.com/in/ajai-kulkarni-84510818b/' className=' text-gray-300 font-[500] text-[18px] '>
                <i class="ri-linkedin-line"></i>
                </a>

              </span>
              <span className=' button w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center ' >
                <a href='#instagram' className=' text-gray-300 font-[500] text-[18px] '>
                <i class="ri-instagram-line"></i>
                </a>

              </span>
              <span className=' button w-[35px] h-[35px] bg-[#2b2d33] p-1 rounded-[50px] cursor-pointer text-center ' >
                <a href='https://twitter.com/AKgroup26' className=' text-gray-300 font-[500] text-[18px] '>
                <i class="ri-twitter-x-line"></i>
                </a>

              </span>

            </div>

          </div>

        </div>
        <div >
              <ul className=' flex items-center mt-10 justify-center gap-10'>
                <li><a className=' text-gray-400 font-[600]  hover:text-red-500' href="#about">
                  About</a></li>
                <li><a className='  text-gray-400 font-[600] hover:text-red-500' href="#skills">
                  Skills</a></li>
                <li><a className='  text-gray-400 font-[600] hover:text-red-500' href="#portfolio">
                  Portfolio</a></li>
                <li><a  className='  text-gray-400 font-[600] hover:text-red-500'href="#contact">
                  Contact</a></li>
                  <li><a className='  text-gray-400 font-[600]  hover:text-red-500' href="#education">
                  Education</a></li>
                </ul>
               </div>

      </div>
      <div className='bg-[#12141e] pt-12 flex items-center justify-center  text-gray-400 text-[14px]'>
Copyright {year} by Ajai kulkarni - All right reserved.
      </div>

    </footer>
  )
}

export default Footer