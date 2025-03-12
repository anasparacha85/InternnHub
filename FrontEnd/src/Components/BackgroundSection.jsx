import React from 'react'

const BackgroundSection = ({h3,h1,pgname}) => {
  const backgroundimage="https://skillhub-woad.vercel.app/assets/skills-hero-navigate-opt-CT1ivRen.webp"

  return (
    <div  className='w-[100%]  ' style={{background: 'linear-gradient(to bottom right , rgb(55, 7, 55),rgb(198, 20, 189),rgb(7, 7, 107))'}}>
    <section className=" text-white h-screen bg-custom  p-16 lg:pl-60  flex justify-center lg:justify-start items-end" style={{backgroundImage:`url( ${backgroundimage})`}}>
       
  <div className=' cursor-pointer mb-32 '>
  <h3 className=" text-lg mb-4">{h3}<span className='text-gray-200'>{pgname}</span></h3>
  <h1 className="lg:text-[55px] text-3xl font-bold mb-4">{h1} </h1>
  </div>

   
  </section>
  </div>
  )
}

export default BackgroundSection
