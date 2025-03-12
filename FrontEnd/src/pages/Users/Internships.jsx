import React, { useState } from 'react'
import UserHeader from '../../Components/UserHeader'
import Footer from '../../Components/Footer'
import { useEffect } from 'react'
import { usestore } from '../../Store/ContextStore'
import Card from '../../Components/Cardss/Card'
import { useNavigate } from 'react-router'
import HandsonCard from '../../Components/Cardss/HandsonCard'

export const Internships = () => {
    const {url, JobsCategories}=usestore()
   
   useEffect(() => {
    console.log("Updated Job Categories:", JobsCategories);
}, [JobsCategories]);
  return (
    <div>
        <UserHeader />
       
        <div className='grid grid-cols-1 md:grid-cols-3 md:px-20 px-8 gap-10 '>
            {JobsCategories.map((value,index)=>(
               
                
                 <Card key={index} image={`${url}/${value.CategoryImage}`} title={value.JobCategory} Category={value.JobCategory} />
               
            ))}
        </div>
        <div className='w-full flex flex-col justify-center py-10 mb-10 mt-10'>
        <div className='w-full flex justify-center'>
            <h1 className='text-3xl font-bold text-center'>Are you looking for hands-on candidate for your company?</h1>
        </div>
        <div className='w-full flex justify-center mt-7'>
        <p className='text-gray-400 text-2xl font-normal w-[70%] text-center '>Our end goal is provide the best candidate for your company for your exponential growth for your company, Let's hands shake and create a win-win situation on both sides.</p>

        </div>

      </div>

      <div className='w-full flex flex-col md:flex-row justify center md:justify-between  md:px-20  mb-10'>
        <HandsonCard img="https://img.icons8.com/ios/50/system-information.png" h1="15k+" h3="Internship Provided"/>
        <HandsonCard img="https://img.icons8.com/ios/50/system-information.png" h1="48k+" h3="LinkedIn Family"/>
        <HandsonCard img="https://img.icons8.com/ios/50/system-information.png" h1="28" h3="Courses on LMS"/>
        <HandsonCard img="https://img.icons8.com/ios/50/system-information.png" h1="15" h3="Companies Onboarded"/>
      </div>
        <Footer/>
    </div>
  )
}

export default Internships
