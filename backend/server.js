import express from 'express';
import ENV from './src/lib/env.js';
const app= express();
 
app.get('/',(req,res)=>{
    res.send("hello world");
})  


console.log("API_KEY:",ENV.api_key);
app.listen(ENV.port,()=>{
    console.log("hi server is running on port",ENV.port);
})

// console.log("Server is starting...");
