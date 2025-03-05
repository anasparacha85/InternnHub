import { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import { usestore } from "../Store/ContextStore";
import { useLocation } from "react-router";
import ProfileOverlay from "./OverLays/ProfileOverlay";
import CoursesOverLay from "./OverLays/CoursesOverLay";
import InternHubLogo from '../../public/InternHubLogo.png'

const LMSHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [coursesHovered, setCoursesHovered] = useState(false);
 
const [profileopen, setprofileopen] = useState(false)
const {UserLoginOpen,UserSignupOpen,setUserSignupOpen,setUserLoginOpen,url,isLoggedIn,user}=usestore()
const location=useLocation()



  return (
    <header className="bg-gray-white text-gray-800 py-4 px-12">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="  text-xl w-1/5">
         <img src={InternHubLogo} alt="" className='w-40' />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 items-center w-4/5">
          {/* Courses Dropdown */}
          <div
            className="relative cursor-pointer p-2 bg-purple-950 text-gray-300 rounded-md"
            onMouseEnter={() => setCoursesHovered(true)}
            onMouseLeave={() => setCoursesHovered(false)}
          >
            courses
            {coursesHovered && (
            <CoursesOverLay/>
            )}
          </div>

          {/* Search Bar */}
          <div className="relative w-3/5 bg-purple-950">
            <input
              type="text"
              placeholder="Search..."
              className="p-2 rounded-md text-gray-400 w-full"
            />
            <Search className="absolute right-2 top-2 text-gray-600" size={18} />
          </div>

          {/* Card Button */}
          <button className="bg-purple-950 text-gray-400 px-4 py-2 rounded-md cursor-pointer">Cart</button>

          {/* Auth Buttons */}
          {isLoggedIn?<> 
            <button className="bg-purple-950 px-4 py-2 text-gray-400  rounded-md cursor-pointer">Instructor</button>
            <button className="bg-purple-950 px-4 py-2 text-gray-400 rounded-md cursor-pointer">MyCourses</button>
            <div className="relative cursor-pointer    text-gray-700 "
             onMouseEnter={() => setprofileopen(true)}
             onMouseLeave={() => setprofileopen(false)}
            >          
            <img
              src={user?user.profilePicture.startsWith("http")?user.profilePicture:`${url}/${user.profilePicture}`:""}
              alt="User"
              className="w-12 h-12 rounded-full mr-4"
            />
                 {profileopen && (
                <ProfileOverlay/>
              )}
            </div>
  
          </>:
           <>
           <button onClick={()=>{setUserLoginOpen(true);localStorage.setItem('prevpath',location.pathname)}} className="bg-purple-950 text-gray-300 border-2 border-purple-800 cursor-pointer px-4 font-semibold py-2 rounded-md">Login</button>
           <button onClick={()=>{setUserSignupOpen(true)}} className="bg-purple-800  text-white font-semibold px-4 py-2 cursor-pointer rounded-md">Signup</button>
           </>} 
          
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-gray-800 text-white p-4 mt-2 space-y-2">
          <p className="p-2 hover:bg-gray-700 cursor-pointer">Courses</p>
          <p className="p-2 hover:bg-gray-700 cursor-pointer">Search</p>
          <p className="p-2 hover:bg-gray-700 cursor-pointer">Card</p>
          {isLoggedIn?<> 
            <button className="bg-purple-950 px-4 py-2 text-gray-400  rounded-md cursor-pointer">Instructor</button>
            <button className="bg-purple-950 px-4 py-2 text-gray-400 rounded-md cursor-pointer">MyCourses</button>
            <div className="relative cursor-pointer    text-gray-700 "
             onMouseEnter={() => setprofileopen(true)}
             onMouseLeave={() => setprofileopen(false)}
            >          
            <img
              src={user?user.profilePicture.startsWith("http")?user.profilePicture:`${url}/${user.profilePicture}`:""}
              alt="User"
              className="w-12 h-12 rounded-full mr-4"
            />
                 {profileopen && (
                <ProfileOverlay/>
              )}
            </div>
  
          </>:
           <>
           <button onClick={()=>{setUserLoginOpen(true);localStorage.setItem('prevpath',location.pathname)}} className="bg-purple-950 text-gray-300 border-2 border-purple-800 cursor-pointer px-4 font-semibold py-2 rounded-md">Login</button>
           <button onClick={()=>{setUserSignupOpen(true)}} className="bg-purple-800  text-white font-semibold px-4 py-2 cursor-pointer rounded-md">Signup</button>
           </>} 
        </nav>
      )}
    </header>
  );
};

export default LMSHeader;
