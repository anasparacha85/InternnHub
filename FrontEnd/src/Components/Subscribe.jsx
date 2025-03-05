import React from 'react'

const Subscribe = () => {
  return (
    <div className='w-full  h-auto text-center py-14' style={{background: 'linear-gradient(to bottom right , rgb(55, 7, 55),rgb(198, 20, 189),rgb(7, 7, 107))'}}>
        <h1 className='text-bold font-bold text-4xl text-white'> Subscribe to our Newsletter</h1>
        <div className='w-full flex justify-center mt-10 '> <p className='text-lg text-white w-2/4'>Internee.pk kickstart student's tech careers with first internships, providing industry exposure, practical skills, and networking opportunities, paving the way for their success in the tech industry. Separated they live in</p>
        </div>
        <input type="email" placeholder="enter your email" className="lg:w-[30%] p-2 text-gray-700  rounded-l bg-white border-1 border-solid border-black mt-8
        " />
        <span><button className="bg-green-700 px-4 py-2 rounded-r text-black l">Subscribe</button></span>
       
        </div>
  )
}

export default Subscribe
