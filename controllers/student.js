import { student } from "../models/student.js";

export const getAllStudents = async(req,res)=>{
    const students = await student.find({});
    res.json({
        success:true,
        students,
    })
};

export const addNewStudent = (req,res)=>{
    const {name,course,rollno} = req.body;
    student.create({
        name,course,rollno
    })
    res.status(201).json({
        success:true,
        message:"Student Added Successfully."
    })
}

export const getStudentDetails = async (req,res)=>{
    const {id} = req.params;
    const stu = await student.findById(id);
    if(stu){
        res.json({
            success:true,
            stu,
        })
    }
    else{
        res.status(404).json({
            success:false,
            message:"Student Not Found",
        })
    }
}
export const deleteStudent = async (req,res)=>{
    const {id} = req.params;
    const stu = await student.findById(id);
    await student.deleteOne(stu);
    if(stu){
        res.json({
            success:true,
            message:"Student Record deleted successfully"
        })
    }
    else{
        res.status(404).json({
            success:false,
            message:"Student Not Found",
        })
    }
}