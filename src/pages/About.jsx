import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt=''/>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600' >
          <p>Welcome to Sunrise Hospitals, your trusted partner in providing comprehensive healthcare with compassion and precision. At Sunrise Hospitals, we understand the importance of accessible, high-quality medical services and strive to make healthcare easier and more personalized for all our patients.</p>
          <p>Sunrise Hospitals is dedicated to excellence in patient care and medical technology. We continually improve our facilities and services, adopting the latest advancements to ensure the best outcomes for our patients. From your first consultation to ongoing care, Sunrise Hospitals is here to support you on every step of your healthcare journey.

</p>
          <b className='text-gray-800' >Our Vision</b>
          <p>Our vision at Sunrise Hospitals is to foster a healthcare environment that puts patient well-being at the forefront. We aim to bridge the gap between individuals and healthcare providers, making it easier for everyone to receive quality care when they need it, in a setting that feels supportive, safe, and welcoming.</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'> CHOOSE US</span></p>
      </div>
      
      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Efficiency:</b>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Covenience:</b>
          <p>Access to a network of trusted healthcare professionals in your area</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>Personalization:</b>
          <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>
      </div>
      
    </div>
  )
}

export default About
