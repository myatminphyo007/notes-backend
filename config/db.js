import mongoose from "mongoose"

const connectDB= async ()=>{
    try{
        await mongoose.connect(process.env.Mongo_DB)
        console.log("Db connnectted successfullly")
    }
    catch(error){
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }

}
export default connectDB