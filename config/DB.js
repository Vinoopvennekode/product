const mongoose=require('mongoose')


const connectDB=async()=>{
    try{
        // const db=await mongoose.connect(process.env.MONGODB_CONNECT_online,{


        const db=await mongoose.connect(process.env.MONGODB_CONNECT,{
            useUnifiedTopology:true,
            useNewUrlParser:true

        })
        ;
    }catch(error){
        console.log(error.message);
        process.exit()
    }
}

module.exports = connectDB