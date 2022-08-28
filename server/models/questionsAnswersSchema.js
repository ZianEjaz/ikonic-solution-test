const mongoose = require("mongoose");

// const questionsAnswersSchema = new mongoose.Schema(
//     {
//     key:{
//     type:Number,
//     required : true
// },
// question:{
//     type:String,
//     required : true
// },
// options:{
//     type:Array,
//     required : true
// },
// }
// )

const questionsAnswersSchema=new mongoose.Schema({
    data : {
        type: Array
    }
})


const QuestionAnswerObj = mongoose.model("questionsObj", questionsAnswersSchema)


module.exports = QuestionAnswerObj