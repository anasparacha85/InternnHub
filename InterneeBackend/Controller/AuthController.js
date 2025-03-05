const User=require('../Model/UserModal')
require('dotenv').config()
const passport=require('passport')
const UserRegister=async (req,res)=>{
    try{
    const {name,email,password,ConfirmPassword}=req.body;
    const finduser=await User.findOne({email});
    console.log(finduser);
    
    if(finduser){
        return res.status(401).json({FailureMessage:'User Already Exists'})
    }
    if(password!=ConfirmPassword){
        return res.status(401).json({FailureMessage:'Please ReWrite the Confrim password'})
    }
    const data=await User.create({name,email,password,ConfirmPassword})
    res.status(200).json({SuccessMessage:'User Registered Syccessfully',token:await data.generateToken()})  
    }
    catch(error){
        console.log('internal server error',error);
        
res.status(500).json({FailureMessage:'Internal server error'})
    }
}
const AdminRegister=async (req,res)=>{
    try {
        const {name,email,password,ConfirmPassword,AdminKey}=req.body;
        console.log(process.env.ADMIN_SECRET_KEY);
        const user=await User.findOne({email:email})
        
        if(user){
            return res.status(401).json({FailureMessage:'User Already Registered!'})
        }
        if(password!=ConfirmPassword){
            return res.status(401).json({FailureMessage:'Please Rewrite The Same Password!'})
        }
       if(AdminKey!=process.env.ADMIN_SECRET_KEY){
        return res.status(403).json({FailureMessage:"Not Applicable Admin Key..You Can't Register as an Admin!"})
       }
       const resgiter=await User.create({name,email,password,ConfirmPassword,role:'Admin'})
       res.status(200).json({SuccessMessage:'You have Registered as an Admin Successfully!',token:await resgiter.generateToken()})
        
    } catch (error) {
        res.status(500).json({FailureMessage:'Internal Server error from AdminSignup '})
        console.log("Admin sign up error",error);
        
        
    }
}

const Login=async (req,res,next)=>{
    passport.authenticate('local',{session:false},async(err,user,info)=>{
        if(err||!user){
            console.log();
            
            return res.status(400).json({FailureMessage:info.message || 'Login Failed'});
        }

        if(user.role=='Admin'){
            res.status(200).json({SuccessMessage:'Login Successfull',token:await user.generateToken(),AdminKey:process.env.ADMIN_SECRET_KEY})
        }
        if(user.role=='User'){
            res.status(200).json({SuccessMessage:'Login Successfull',token:await user.generateToken()})

        }
    })(req,res,next)

  
}

const GoogleLogin=async(req,res)=>{
    const token=await req.user.generateToken()
   const SuccessMessage='Login Successfull'
    res.redirect(`http://localhost:5173/google-auth-success?token=${token}&SuccessMessage=${SuccessMessage}`)

    
}

module.exports={UserRegister,AdminRegister,Login,GoogleLogin}