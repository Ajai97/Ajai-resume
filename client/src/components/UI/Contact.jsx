import React, { useState } from 'react'
import axios from 'axios'


const Contact = () => {
    
    const[name,setName]=useState()
    const[email,setEmail]=useState()
    const[message,setMessage]=useState()
    
    const Submit=(e)=>{
        e.preventDefault();
        axios.post("http://localhost:3001/contact",{name,email,message})
        .then(result=>{
            console.log(result)
        })
        .catch(err=>console.log(err))
      
    }
  return (
    <section id='contact' className=' contact pb-16 bg-slate-200'>
        <div className='container'>
            <h2 className='text-headingColor font-[700] text-[2.5rem] mb-8'>Contact Info</h2>
            <div className='md:flex justify-between items-center'>
                <div className='w-full md:w-1/2 h-[300px] sm:h-[450px] '>
                <iframe title='google-maps' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117313.01469386979!2d77
                .2334530252385!3d19.14740806328775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd1d
                66bb9d31721%3A0x43892c180155daf1!2sNanded%2C%20Maharashtra!5e1!3m2!1sen!2sin!4v1693041346801!5m2!1sen!2sin" 
                className='w-full h-full border-0' allowFullScreen="" 
                loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

                </div>
                <div className='w-full text-smallTextColor flex font-[800] text-[40px] mt-8 md:mt-0 md:w-1/2 sm:h-[450px] lg:flex items-center bg-indigo-100 px-4
                lg:px-8 py-8 '> <ul>
                    <i class="ri-mail-fill">ajaikulkarni669@gmail.com</i><br/>
                <i class="ri-phone-fill">+91-7507342316</i><br/>
                <i class="ri-map-pin-2-fill">      Nanded, Maharashtra, India</i>
                </ul>
                
                    
                </div>
            
            </div>

        </div>
    </section>
  )
}

export default Contact

