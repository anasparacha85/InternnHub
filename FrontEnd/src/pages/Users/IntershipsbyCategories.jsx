import React, { useEffect, useState } from 'react'
import { usestore } from '../../Store/ContextStore'
import { useNavigate, useParams } from 'react-router';
import UserHeader from '../../Components/UserHeader'
import Footer from '../../Components/Footer'
import JobCategoryCard from '../../Components/Cardss/JobbyCategoryCard';

export const IntershipsbyCategories = () => {

    const {jwttoken,UserLoginOpen,UserSignupOpen,setUserSignupOpen,setUserLoginOpen,url}=usestore();
    const params=useParams()
    console.log(params.Category);
    const navigate=useNavigate()
    
    const [jobsdata, setjobsdata] = useState([])
    const fetchjobsbycategories=()=>{
        fetch(`${url}/api/jobs/jobsbycategories/${params.Category}`, {
            method: 'GET',
        }).then((res)=>{
            console.log(res);
            
            return res.json()
        }).then((data)=>{
            console.log(data);
            
            setjobsdata(data)
            
        })
    }
    useEffect(()=>{
        fetchjobsbycategories()
    },[])
  
   
  return (
    <div>
    <UserHeader/>
<div className='w-full flex justify-center'>
  <h1 className='text-3xl font-bold'>Featured Oppurtunities</h1>



</div>
<div className='w-full flex justify-center ' >
<div className='md:w-[75%] w-full flex flex-col  '>
  {jobsdata.map((value,index)=>(
<JobCategoryCard key={value._id} title={value.JobName} image={value.JobImage} type={value.JobType} duration={value.JobDuration} id={value._id}/>
  )

  )}

</div>
</div>


    <Footer/>
    </div>
  )
}

export default IntershipsbyCategories
