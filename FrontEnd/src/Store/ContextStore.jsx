import { useContext,createContext, useEffect } from "react";
import { useState } from "react";
export const StoreContext=createContext();
export const StoreContextProvider=({children})=>{
    const url="https://internee-backend-3jwkowhoh-anasparacha85s-projects.vercel.app";
const [AdminLoginOpen, setAdminLoginOpen] = useState(false)
const [AdminSignupOpen, setAdminSignupOpen] = useState(false)
const [InterneeLoginOpen, setInterneeLoginOpen] = useState(false)
const [InterneeSignupOpen, setInterneeSignupOpen] = useState(false)
const [jwtToken, setjwtToken] = useState(localStorage.getItem('Jwt Token'));
const [AdminKey, setAdminKey] = useState(localStorage.getItem('Admin Key'))
const [UserSignupOpen, setUserSignupOpen] = useState(false)
const [UserLoginOpen, setUserLoginOpen] = useState(false)
const [JobsCategories, setJobsCategories] = useState([])
const [jobbyquery, setjobbyquery] = useState([])
const [jobresponse, setjobresponse] = useState({})
const [SuccessMessage, setSuccessMessage] = useState(null)
const [user, setuser] = useState({profilePicture:"",name:""})
const SaveTokenToLs=(jwttoken)=>{
    return localStorage.setItem('Jwt Token',jwttoken)

}
const SaveAdminKeyToLs=(AdminKey)=>{
    return localStorage.setItem('Admin Key',AdminKey)
}
const isLoggedIn=!!jwtToken;
const logouttrue=()=>{
    localStorage.removeItem('Jwt Token')
    localStorage.removeItem('Admin Key')
}

    
  
const fetchd=function(){
    
    
    fetch(`${url}/api/jobs/Internships`,{
    method:'GET',

}).then((response)=>{
    return response.json()
}).then((Data)=>{

    setJobsCategories(Data)
   
    
}).catch((error)=>{
    console.log(error);
    
})
}

const fetchuser=()=>{
    fetch(`${url}/api/user/userprofile`,{
        method:'GET',
        headers:{
            "Authorization":`Bearer ${jwtToken}`
        }
    }).then((res)=>{
        return res.json()
    }).then((data)=>{
        console.log("user profile",data);
        
        setuser(data)
    }).catch((error)=>{
        console.log(error);
        
    })
}
useEffect(()=>{
    
        fetchuser()
  
    
},[jwtToken,url])
   
   useEffect(()=>{
    fetchd()
   },[])
    return ( <StoreContext.Provider value={{SuccessMessage,setSuccessMessage,setuser,JobsCategories,logouttrue,isLoggedIn,url,AdminLoginOpen,setAdminLoginOpen,AdminSignupOpen,setAdminSignupOpen,InterneeLoginOpen,setInterneeLoginOpen,InterneeSignupOpen,setInterneeSignupOpen,jwtToken,AdminKey,SaveTokenToLs,SaveAdminKeyToLs,UserLoginOpen,UserSignupOpen,setUserSignupOpen,setUserLoginOpen,jobbyquery,setjobbyquery,jobresponse,setjobresponse,user}}>
        {children}
    </StoreContext.Provider>
    )
}
export const usestore=()=>{
    const contextvalue=useContext(StoreContext);
    if(!contextvalue){
        throw new Error("UserSTore Should be inside the provider");
        
    }
    return contextvalue;
}