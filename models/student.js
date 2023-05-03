import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name:String,course:String,rollno:Number,
});
export const student = mongoose.model("Students",studentSchema);