//require('dotenv').config({path:'./env'})

import dotenv from "dotenv"
import connectDB from "./db/index.js";


dotenv.config({
    path: './env',
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT ||8000,()=>{
        console.log(`Server is running on port ${process.env.PORT || 8000}`);
    })
})
.catch(()=>{
    console.log('Error connection failed')
})














//not a rightapproach but still working to connect moongoose with db
// import express from "express"
// const app=express()

// (async()=>{
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)   
//         app.on("error",(error)=>{
//             console.error("Error in server");
//             throw error
//         })

//         app.listen()


//     }
//         catch(err){
//             console.log(err);
//             }
// })()



