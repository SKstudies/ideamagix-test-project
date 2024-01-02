import Instructor from '../models/Instructor.js';

const instructorLogin = async (req, res) => {
  try {
    const { name, password } = req.body;
    const instructor = await Instructor.findOne({ name, password });
    // console.log(instructor);
    if (instructor) {
      res.json({message: 'Instructor login successful' });
    } else {
      res.status(401).json({message: 'Invalid credentials for instructor' });
    }
  } catch (error) {
    console.error(error);
    res.status(401).json({message: 'Internal Server Error in instructor' });
  }
};

const getInstructorLectures = async (req, res) => {
  try {
    // const { instructorId } = req.body;
    const { name } = req.body;
    const instructor = await Instructor.findOne({name: name}).populate('lectures.course');
                                                              // populate method is something new i got 
                                                              //.populate('lectures.course'): The populate method is used to replace the specified path in the document with the actual document(s) from another collection. In this case, it populates the 'lectures' field with the corresponding 'course' documents.
                                                              //'lectures.course': This is the path to populate. It means that for each lecture in the 'lectures' array, replace the 'course' field with the actual document from the 'Course' collection.
    console.log(instructor);
    console.log(instructor.lectures)                      
    if (instructor) {
      res.json({lectures: instructor.lectures });
    } else {
      res.status(404).json({message: 'Instructor not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({message: 'DB error Internal Server Error' });
  }
};


const getAllInstructors = async (req, res) => {
  try {
    const instructors = await Instructor.find();
    res.json({ success: true, instructors });
  } catch (error) {
    console.error(error);
    res.status(401).json({message: 'db error' });
  }
};

export { instructorLogin, getInstructorLectures, getAllInstructors };