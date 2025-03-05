import { useState } from "react";
import { Bold, Italic, Save } from "lucide-react";
import { usestore } from "../../Store/ContextStore";

export const Account = () => {
  
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const {user,url,jwtToken,setuser}=usestore()

  

 
  
  const [formdata, setformdata] = useState({
    email:user.email,
    password:"",
    NewPassword:"",
    ConfirmNewPassword:""
  })
  

const onchange=(e)=>{
  const {name,value}=e.target;
  setformdata({...formdata,[name]:value})
}

const onsubmit=(e)=>{
e.preventDefault();
fetch(`${url}/api/user/UpdateUserPassword`,{
  method:'POST',
  body:JSON.stringify(formdata),
  headers:{
    'Content-Type':'application/json',
    'Authorization':`Bearer ${jwtToken}`
  }
})
.then((res)=>{
  return res.json()
}).then((data)=>{
 console.log(data);
 setuser(data.finddata)

  
 
}).catch((error)=>{
console.log(error);

})
}

  return (
    <div className="max-w-[80%] mx-auto p-6  shadow-lg rounded-lg mt-6">
      {/* Profile Heading */}
      <div className="text-center">
      <h1 className="text-2xl font-bold mb-2 text-gray-500"></h1>Account
      <p className="text-gray-400 mb-4">
        Add information about yourself to share on your profile.
      </p>
      </div>
     
<form onSubmit={onsubmit}>
      {/* Basic Information Fields */}
      <div className="flex flex-col  gap-4">
        <input
        name="email"
        value={formdata.email}
          type="email"
          onChange={onchange}
          placeholder="First Name"
          className="p-2 border rounded-md w-full text-gray-300"
        />
        <input
        name="password"
        value={formdata.password}
        onChange={onchange}
          type="password"
          placeholder="Enter your Old Password"
          className="p-2 border rounded-md w-full text-gray-300"
        />
        <input
        name="NewPassword"
          type="password"
          value={formdata.NewPassword}
          onChange={onchange}
          placeholder="Type New Password"
          className="p-2 border rounded-md w-full md:col-span-2 text-gray-300"
        />
        <input
        name="ConfirmNewPassword"
        value={formdata.ConfirmNewPassword}
        onChange={onchange}
          type="password"
          placeholder="Re-Type New Password"
          className="p-2 border rounded-md w-full "
        />
      </div>

    
   
    
        
      
      {/* Save Button */}
      <button type="submit" className="mt-6 w-full bg-purple-800 text-white py-2 rounded-md flex items-center justify-center">
        <Save className="mr-2" size={18} /> Save
      </button>
      </form>
    </div>
  );
};

export default Account;
