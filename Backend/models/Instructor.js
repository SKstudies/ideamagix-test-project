import mongoose from "mongoose";


//************  schema model template ***********/
// import mongoose from 'mongoose';
// const { Schema } = mongoose;

// const blogSchema = new Schema({
//   title: String, // String is shorthand for {type: String}
//   author: String,
//   body: String,
//   comments: [{ body: String, date: Date }],
//   date: { type: Date, default: Date.now },
//   hidden: Boolean,
//   meta: {
//     votes: Number,
//     favs: Number
//   }
// });

// const Blog = mongoose.model('Blog', blogSchema);
// // ready to go!


const instructorSchema = mongoose.Schema({
    name: {
        type: String,
        requried: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    // lectures: [ 
    //     {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Lecture'
    //     }
    // ],
    // Courses: [ 
    //     {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Course'
    //     }
    // ]
    lectures: [ 
        {   
            course:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Course'
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
}
// // custom validation would be a better thing to do....
// {
//     validate: {
//         validator: function (lectures){
//             if(lectures.lenght() > 0){

//             }
//         }
//     } 
// }

);


const Instructor = mongoose.model("Instructor", instructorSchema);

export default Instructor;