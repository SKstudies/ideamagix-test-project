import mongoose from "mongoose";

const courseSchema = mongoose.Schema({
    
    name: {
        type: String,
        required: true,
        unique: true
    },
    level: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    lectures: [ 
        {   
            instructor:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Instructor'
            }, 
            date:{
                type: Date,
                required: true,
                set: value => {
                    // Set hours, minutes, seconds, and milliseconds to 0
                    const newDate = new Date(value);
                    newDate.setUTCHours(0, 0, 0, 0);
                    return newDate;
                }
            }
        }
    ]
});

const Course = mongoose.model("Course", courseSchema);

export default Course;