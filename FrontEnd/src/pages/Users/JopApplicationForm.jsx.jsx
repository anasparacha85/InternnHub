import React, { useEffect, useRef, useState } from "react";
import UserHeader from "../../Components/UserHeader";
import Footer from "../../Components/Footer";
import { usestore } from "../../Store/ContextStore";
import { useParams } from "react-router";
import { toast } from "react-toastify";

export const JobApplicationForm = () => {
  const [jobname, setjobname] = useState('')
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    cv: null,
    qualifications: "",
    experience: "",
    jobPosition: "",
    expectedSalary: "",
    coverLetter: "",
  });
  
  const {url,jwtToken}=usestore();
  console.log('hello token',jwtToken);
  
  const params=useParams()
  const fetchjobbyid=()=>{
    fetch(`${url}/api/jobs/jobsbyid/${params.id}`,{
      method:'GET',
      headers: {
                "Authorization": `Bearer ${jwtToken}`, // Include token in the request
             
            }

    }).then((res)=>{
      return res.json()
    }).then((data)=>{
      console.log(data);
      setjobname(data.JobName)
      

    }).catch((error)=>{
      console.log(error);
      
    })
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
      const file = e.target.files[0];
      if (!file) return;
      
      fileInputRef.current = file; // Store file in ref
      console.log("Selected File (Ref):", fileInputRef.current);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const userdata=new FormData();
    userdata.append("name",formData.name);
  userdata.append("email", formData.email);
  userdata.append("phone", formData.phone);
  userdata.append("qualifications", formData.qualifications);
  userdata.append("experience", formData.experience);
  userdata.append("jobPosition", jobname);
  userdata.append("expectedSalary", formData.expectedSalary);
  userdata.append("coverLetter", formData.coverLetter);
  // Append file from useRef
  if (fileInputRef.current) {
    userdata.append("cv", fileInputRef.current);
} else {
    console.error("File not found in ref!");
}

console.log("✔ FormData Entries:");
for (let pair of userdata.entries()) {
    console.log(pair[0], pair[1]); // Debugging
}
console.log(formData.cv);


  
    fetch(`${url}/api/jobs/Apply`,{
      method:'POST',
      headers: {
        "Authorization": `Bearer ${jwtToken}`, // Include token in the request
     
    },
      body:userdata

    }).then((res)=>{
      console.log(res);
      
      return res.json()
    }).then((data)=>{
      console.log('jellp',data);
      if(data.SuccessMessage){
        toast.success(data.SuccessMessage)
        setFormData({  name: "",
          email: "",
          phone: "",
          cv: null,
          qualifications: "",
          experience: "",
          jobPosition: "",
          expectedSalary: "",
          coverLetter: "",})
      }
      if(data.FailureMessage){
        toast.error(data.FailureMessage)
      }
      
      

    }).catch((error)=>{
      console.log(error);
      toast.error(error.FailureMessage)
      
    })
  }
  
useEffect(() => {
  fetchjobbyid()
}, [])

  return (
    <div className="" style={{background: 'linear-gradient(to bottom right , rgb(55, 7, 55),rgb(198, 20, 189),rgb(7, 7, 107))'}}>
    <UserHeader/>
    <div className="max-w-3xl mx-auto  p-6 rounded-lg shadow-lg mt-10" style={{background: 'rgb(6, 6, 74)'}}>
      <h2 className="text-2xl font-semibold text-center mb-6 text-gray-400">Job Application</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block text-gray-300 font-medium">Full Name</label>
          <input 
            type="text" name="name" value={formData.name} onChange={handleChange} required 
            className="w-full p-2 border border-gray-800 text-gray-300 rounded-lg focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-300 font-medium">Email</label>
          <input 
            type="email" name="email" value={formData.email} onChange={handleChange} required 
            className="w-full p-2 border border-gray-800 text-gray-300 rounded-lg focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-gray-300 font-medium">Phone Number</label>
          <input 
            type="tel" name="phone" value={formData.phone} onChange={handleChange} required 
            className="w-full p-2 border border-gray-800 rounded-lg text-gray-300 focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Job Position */}
        <div>
          <label className="block text-gray-300 font-medium">Job Position</label>
          <input 
            type="text" name="jobPosition" value={jobname} disabled  required 
            className="w-full p-2 border border-gray-800 text-gray-300 rounded-lg focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Expected Salary */}
        <div>
          <label className="block text-gray-300 font-medium">Expected Salary (USD)</label>
          <input 
            type="number" name="expectedSalary" value={formData.expectedSalary} onChange={handleChange} required 
            className="w-full p-2 border border-gray-800 text-gray-300 rounded-lg focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Qualifications */}
        <div>
          <label className="block text-gray-300 font-medium">Qualifications</label>
          <input 
            type="text" name="qualifications" value={formData.qualifications} onChange={handleChange} required 
            className="w-full p-2 border border-gray-800 text-gray-300 rounded-lg focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Experience */}
        <div>
          <label className="block text-gray-300 font-medium">Years of Experience</label>
          <input 
            type="number" name="experience" value={formData.experience} onChange={handleChange} required 
            className="w-full p-2 border border-gray-800 text-gray-300 rounded-lg focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Upload CV */}
        <div>
          <label className="block text-gray-300 font-medium">Upload CV (PDF or DOCX)</label>
          <input
  type="file"
  accept=".pdf,.doc,.docx" onChange={handleFileChange} required 
            className="w-full p-2 border border-gray-800 text-gray-300 bg-gray-600 rounded-lg focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Cover Letter */}
        <div>
          <label className="block text-gray-300 font-medium">Cover Letter</label>
          <textarea 
            name="coverLetter" value={formData.coverLetter} onChange={handleChange} required 
            className="w-full p-2 border text-gray-300 rounded-lg focus:ring focus:ring-blue-300"
            rows="4"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button type="submit" className="bg-purple-800 text-white px-6 py-2 rounded-lg hover:bg-purple-800 transition">
            Apply Now
          </button>
        </div>
      </form>
    </div>
    <Footer/>
    </div>
  );
};

export default JobApplicationForm;
