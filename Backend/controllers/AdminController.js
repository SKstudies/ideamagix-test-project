import Admin from '../models/Admin.js';
import Course from '../models/Course.js';
import Instructor from '../models/Instructor.js';

// i am thinking of this logic :::
// 1. how about this admin can add a course without lectures at the first.
// so we can get everything 

// a. Name
// b. Level
// c. Description
// d. Image


// 2. then on the frontend we will display the course card with add lecture btn
// it will should give us 

// 1. course name / id
// 2. instructor name
// 3. llecture date .


// 3. then we can check if given date is already present in the lectrue obj array of the instructor......
//   if present then lecture cannot be added>
//  else we can update the instructors lecture array with {course,date} and course lecture array with{instructor , date} 


//adming login
const adminLogin = async (req, res) => {
  try {
    const { name, password } = req.body;
    // console.log(req.body);
    const admin = await Admin.findOne({ name, password });
    if (admin) {
      res.json({message: 'Admin login successful' });
    } else {
      //just to save the admin
      // const newAdmin = new Admin({
      //   name: name,
      //   password: password
      // })
      // newAdmin.save();
      res.status(401).json({message: 'Invalid credentials' });
    }
  } catch (error) {
    console.error(error);
    res.status(401).json({message: 'db error' });
  }
};



// add course without lecture
const addCourse = async (req, res) => {
  try {
    const { name, level, description, image } = req.body;
    const course = new Course({ name, level, description, image, lectures: []});
    await course.save();
    res.json({message: 'New Course added successfully' });
  } catch (error) {
    console.error(error);
    res.status(401).json({message: 'db error' });
  }
};


// // add lectures 
// const addLecutre = async (req, res) => {
//   try {
//     const { name, level, description, image, lectures } = req.body;
//     const course = new Course({ name, level, description, image, lectures });
//     await course.save();
//     res.json({message: 'Course added successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(401).json({message: 'db error' });
//   }
// };


const addLecture = async (req, res) => {
  try {
    const { courseId, instructorId, date } = req.body;

    // Check if the date is already present in the instructor's lecture array
    const existingLecture = await Instructor.findOne({
      _id: instructorId,
      'lectures.date': date,
    });

    if (existingLecture) {
      return res.status(401).json({message: 'Instructor has another lecture on this date.' });
    }

    // Update the 's lecture array
    // #atomic update
    await Instructor.updateOne(
      { _id: instructorId },
      {$push: {lectures: {
                            course: courseId,
                            date: date,
                         },
               },
      }
    );

    // Update the course lecture array
    //#atommic update 
    await Course.updateOne(
      { _id: courseId },
      {
        $push: { lectures: {
                              instructor: instructorId,
                              date: date,
                            },
                },
      }
    );

    return res.json({message: 'Lecture added successfully.' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({message: 'DB eror Internal Server Error' });
  }
};




// // easiest of everything ....... get alllll courses (i though)
// const getAllCourses = async (req, res) => {
//   try {
//     const courses = await Course.find();
//     res.json({ success: true, courses });
//   } catch (error) {
//     console.error(error);
//     res.status(401).json({message: 'db error' });
//   }
// };

const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find().populate('lectures.instructor');
    res.json({ success: true, courses });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'DB error Internal Server Error' });
  }
};

export { adminLogin, addCourse, addLecture, getAllCourses};