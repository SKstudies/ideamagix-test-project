// tried to establish a different type of relation in data no need right now.
import mongoose from "mongoose";

const lectureSchema = mongoose.Schema({
    courseId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course'
    },
    instructorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Instructor'
    },
    date:{
        type: Date,
        required: true
    }
});

const Lecture = mongoose.model("Lecture", lectureSchema);

export default Lecture;

