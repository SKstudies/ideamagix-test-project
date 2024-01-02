import mongoose from "mongoose";


const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URI, 
            {
            useNewUrlParser: true,
            }
        );
        console.log("MongoDB Connected")
    } 
    catch(error){ 
        console.log(`DB connection Error ${error}`);
    }
}

export default connectDB; 