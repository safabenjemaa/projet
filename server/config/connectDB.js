const mongoose = require("mongoose");

const connectDB= async ()=>{
    try {
        await mongoose.connect(process.env.DB_URI , {
           useNewUrlParser: true,
           useUnifiedTopology: true
       });
       console.log("database connected");
    } catch (error) {
        console.log('can not connect to database');
        
    }
    
}
module.exports=connectDB;