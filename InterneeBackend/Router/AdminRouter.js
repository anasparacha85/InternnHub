const express=require("express")
const Router=express.Router()
const AdminController=require('../Controller/AdminController')
const passport=require('passport')
const RoleAccess=require('../Middleware/RoleMiddleware')
Router.route('/ViewJobApplications').get(passport.authenticate('jwt',{session:false}),RoleAccess('Admin'),AdminController.ViewJobApplications)
module.exports=Router