import mongoose from "mongoose";

const connectToMongoDB = async ()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Connected To MongoDB");
    } catch (error) {
        console.log("Error connecting to MongoDB", error.message);
        throw error; 
    }
}
 
export default connectToMongoDB;