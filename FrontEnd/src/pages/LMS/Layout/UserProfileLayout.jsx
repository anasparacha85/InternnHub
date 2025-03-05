import { useState } from "react";
import { Menu, X, User, Settings, Image } from "lucide-react";
import LMSHeader from "../../../Components/LMSHeader";
import ProfileHeader from "../../../Components/ProfileHeader";
import { Outlet } from "react-router";
import { usestore } from "../../../Store/ContextStore";
import { NavLink } from "react-router-dom";

const UserProfileLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
const {user,url}=usestore()
  return (
    <div  className="overflow-y-hidden" style={{background: 'linear-gradient(to bottom right , rgb(55, 7, 55),rgb(198, 20, 189),rgb(7, 7, 107))'}}>
    <LMSHeader/>
    <ProfileHeader Heading={"User Profile"}/>
     <div className="flex h-screen " >
      {/* Sidebar */}
      <aside
        className={`fixed md:relative h-screen bg-purple-950 md:bg-transparent  text-gray-600 w-64 p-5 transition-transform ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:w-1/4 lg:w-1/5 xl:w-1/6 h-full`}
      >
        {/* Close Button for Mobile */}
        <button
          className="absolute top-4 right-4 md:hidden"
          onClick={() => setSidebarOpen(false)}
        >
          <X size={24} />
        </button>

        {/* User Profile Section */}
        <div className="flex flex-col items-center mb-6">
          <img
            src={user?user.profilePicture.startsWith("http")?user.profilePicture:`${url}/${user.profilePicture}`:""}
            alt="User"
            className="w-20 h-20 rounded-full border-2 border-gray-500"
          />
          <h2 className="text-lg font-semibold text-gray-400 mt-2">{user?user.name:"no name"}</h2>
        </div>

        {/* Sidebar Navigation */}
        <nav className="space-y-4">
          <NavLink to="/LMS/UserProfile" className="flex items-center p-2 text-gray-400 hover:bg-gray-700 rounded-md">
            <User className="mr-2" size={20} /> Profile
          </NavLink>
          <NavLink to="/LMS/UserProfile/Account" className="flex items-center text-gray-400 p-2 hover:bg-gray-700 rounded-md">
            <Settings className="mr-2" size={20} /> Account
          </NavLink>
          <NavLink to="/LMS/UserProfile/Photo" className="flex items-center text-gray-400 p-2 hover:bg-gray-700 rounded-md">
            <Image className="mr-2" size={20} /> Photos
          </NavLink>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 h-full pb-5  " style={{background: 'linear-gradient(to bottom right , rgb(55, 7, 55),rgb(198, 20, 189),rgb(7, 7, 107))'}}>
        {/* Menu Button for Mobile */}
        <button
          className="md:hidden p-2 bg-gray-900 text-white rounded-md"
          onClick={() => setSidebarOpen(true)}
        >
          <Menu size={24} />
        </button>

     <Outlet/>
      </main>
    </div></div>
   
  );
};

export default UserProfileLayout;
