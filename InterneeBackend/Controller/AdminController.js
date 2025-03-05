const EmployeeModal=require('../Model/AppliedEmlpoyeesModel')
const ViewJobApplications=async(req,res)=>{
    try {
        const FindData=await EmployeeModal.find();
        if(!FindData){
return res.status(400).json({FailureMessage:"No Users Applied"})
        }
        res.status(200).json(FindData)
    } catch (error) {
        console.log("Internal Server Error jobapplictionvew",error);
        res.status(500).json({FailureMessage:"Internal Server Error " ,error})
        
        
    }

}
module.exports={ViewJobApplications}