import express from 'express';
import { adminLogin, addCourse, addLecture, getAllCourses } from '../controllers/AdminController.js';

const router = express.Router();

// adming login
router.post('/login', adminLogin);
// for debugging
// router.get('/login-admin', adminLogin);
// add a course
router.post('/add-course', addCourse);
//get all course for desplaying 
router.post('/add-lectures', addLecture);
//get all course for desplaying 
router.get('/courses', getAllCourses);

export default router;