const mongoose =require("mongoose");
 const schema = mongoose.Schema;

 const UserSocietesSchema = new schema ({
    
     Company_Name: {
         type: "string", required:true
     },
     manager_Name: {
         type:"string", required:true
     },
     
     email:{
         type:"string",required:"true"
     },
     password :{
         type:"string",required:true
     },
     phone : {
         type:"number" , required:true
     },
   
     Address_seat:{
         type:"string" , required: true 
     },
     
     date:{
         type:"Date",default: Date.now
     },

 });
 module.exports=userSocietes =mongoose.model("UserSocietes", UserSocietesSchema);

