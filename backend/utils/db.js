import mongoose from "mongoose";

const connectDB = async (uri) => {
    try{
        const dbOption= {
            dbName:"hamarijob"
        }
        await mongoose.connect(uri, dbOption);
        console.log("database connected!");
    }catch(error) {
        console.log(error);
    }
}

export default connectDB;