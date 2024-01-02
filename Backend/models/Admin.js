import mongoose from "mongoose";

const adminSchema = mongoose.Schema({
    name: {
        type: String,
        requried: true,
        unique: true
    },
    password: {
        type: String,
        requried: true
    }
});


const Admin = mongoose.model("Admin", adminSchema);

export default Admin;