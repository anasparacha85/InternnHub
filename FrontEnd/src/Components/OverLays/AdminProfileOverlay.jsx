import React from 'react'
import { usestore } from '../../Store/ContextStore'
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const AdminProfileOverlay = () => {
    const {user,url}=usestore();
    console.log(user);
    
  return (
    <div>
       <div className="absolute top-full right-0 w-[350px] bg-gray-50 text-gray-700 p-2 rounded-md shadow-lg">
                     <div className="flex items-center p-3">
            <img
              src={user?user.profilePicture.startsWith("http")?user.profilePicture:`${url}/${user.profilePicture}`:""}
              alt="User"
              className="w-14 h-14 rounded-full mr-4"
            />
            <div>
              <h4 className="text-lg text-black">{user.name}</h4>
              <h4 className="text-gray-500">{user.email}</h4>
            </div>
          </div>
          

{/* Menu Items */}
{[
  { label: "Admin Profile", icon: "/assets/profile.png" ,link:'/Admin'},
  { label: "Job Applications", icon: "/assets/favourites.png",link:'/Admin/JobApplications' },
  { label: "Post a Job", icon: "/assets/calendar.png" ,link:'/Admin/post-a-job'},
  { label: "Delete a Job ", icon: "/assets/calendar.png" ,link:'/Admin/delete-a-job'},
 
].map((item, index) => (
    <Link to={`${item.link}`}>
         <div key={index} className="flex items-center p-3 hover:bg-gray-200 cursor-pointer rounded-lg">
    <img src={item.icon} alt={item.label} className="w-6 h-6 mr-4" />
    <h4 className="text-lg text-black">{item.label}</h4>
  </div>
    </Link>
 
))}
 <div className="flex items-center p-3 bg-gray-100">
            
            <div>
              <NavLink to='/logout' className="text-lg text-gray-700">Logout</NavLink>
              
            </div>
          </div>
                </div>
             
      
    </div>
  )
}

export default AdminProfileOverlay
