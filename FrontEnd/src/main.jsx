import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter,createBrowserRouter,createRoutesFromElements,Route, RouterProvider } from 'react-router-dom'
import Home from './pages/Admin/Home.jsx'
import Company from './pages/Admin/Company.jsx'
import Hiring from './pages/Admin/Hiring.jsx'
import Contact from './pages/Admin/Contact.jsx'
import Aboutus from './pages/Admin/Aboutus.jsx'
import GoogleAuthSuccess from './pages/GoogleAuthSuccess.jsx'
import UserHome from './pages/Users/Home.jsx'
import Logout from './pages/Logout.jsx'
import PostJob from './pages/Admin/PostJob.jsx'
import Internships from './pages/Users/Internships.jsx'
import IntershipsbyCategories from './pages/Users/IntershipsbyCategories.jsx'
import JobApplicationForm from './pages/Users/JopApplicationForm.jsx.jsx'
import JobPortal from './pages/Admin/JobPortal.jsx'
import CompanyCollaboration from './pages/Users/CompanyCollaboration.jsx'
import UserContact from './pages/Users/Contact.jsx'
import LMSHome from './pages/LMS/Home.jsx'
import LMS from './pages/LMS/LMS.jsx'
import UserProfileLayout from './pages/LMS/Layout/UserProfileLayout.jsx'
import Profile from './pages/LMS/Profile.jsx'
import Account from './pages/LMS/Account.jsx'
import Photo from './pages/LMS/Photo.jsx'
import AdminLayout from './pages/Admin/Layout/AdminLayout.jsx'
import AdminProfile from './pages/Admin/AdminProfile.jsx'
import JobApplications from './pages/Admin/JobApplications.jsx'
import AdminRoute from './Routes/AdminRoute.jsx'
import UserRoute from './Routes/UserRoute.jsx'
import ErrorPage from './pages/ErrorPage.jsx'



const Router=createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<App/>}>
     <Route path='' element={<UserHome/>}/>
    
    <Route path='google-auth-success' element={<GoogleAuthSuccess/>}/>
   
    <Route path='/Internships' element={<Internships/>}/>
    <Route path='/Internships/:Category' element={<IntershipsbyCategories/>}/>
    <Route path='/JobApplicationForm/:id' element={<JobApplicationForm/>}/>
    <Route path='/CompanyCollaboration' element={<CompanyCollaboration/>}/>
    <Route path='/Contact' element={<UserContact/>}/>

   
    <Route path='/job-portal'  element={<JobPortal/>}>
    <Route path='' element={<Home/>}/>
    <Route path='company' element={<Company/>}/> 
    <Route path='hiring' element={<Hiring/>} />
    <Route path='contact' element={<Contact/>}/>
    <Route path='About-us' element={<Aboutus/>}/>

   
   
    </Route>
    <Route element={<AdminRoute/>}>
    <Route path='/Admin' element={<AdminLayout/>}>
    <Route path='' element={<AdminProfile/>}/>
    <Route path='post-a-job' element={<PostJob/>}/>
    <Route path='JobApplications' element={<JobApplications/>}/>
    </Route>
    </Route>
   
    <Route path='/LMS' element={<LMS/>}>
    <Route path='' element={<LMSHome/>}/>
    <Route element={<UserRoute/>}>
    <Route path='UserProfile' element={<UserProfileLayout/>}>
    <Route path='' element={<Profile/>}/>
    <Route path='Account' element={<Account/>}/>
    <Route path='Photo' element={<Photo/>}/>
    </Route>
    </Route>
    
    
    </Route>

<Route path='*' element={<ErrorPage/>}/>
    <Route path='/logout' element={<Logout/>}/>
  </Route>
)
  
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Router}/>
  </StrictMode>,
)
