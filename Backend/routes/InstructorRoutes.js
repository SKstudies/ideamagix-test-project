import express from "express";
import { instructorLogin, getInstructorLectures, getAllInstructors } from "../controllers/InstructorController.js";

const router = express.Router();

// login -- instruct
router.post('/login',instructorLogin);
// let instruct lect
router.get('/lectures', getInstructorLectures);
// get all instructors 
router.get('/instructors',getAllInstructors);

export default router;

