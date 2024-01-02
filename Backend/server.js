import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from './config/db.js';
import AdminRoutes from './routes/AdminRoutes.js'
import InstructorRoutes from './routes/InstructorRoutes.js'







// std server config
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// connect db
connectDB();

// routes 
app.use('/admin', AdminRoutes);
app.use('/instructor', InstructorRoutes);

// finally start the server
app.listen(PORT, () => {
    return ( console.log(`server started on port: ${PORT}`));
});





