let express=require('express');
let mongoose=require('mongoose');

let app=express();

mongoose.connect('mongodb://localhost:27017/contacts').then(()=>{
    console.log("db connected")

})

let userschema = new mongoose.Schema({

   name:String,
   email:String,
   active:Boolean

})

let user=mongoose.model('infos',userschema);


app.get('/data',async (req,res)=>{

   try{
    let data= await user.find({})
    
    res.json(data)
   }
   catch(error){
    console.log(error)
   }

})

app.listen(3000,()=>{
    console.log("port running on 3000")
})