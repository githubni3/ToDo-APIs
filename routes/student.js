import express from "express";
import { student } from "../models/student.js";
import { addNewStudent, deleteStudent, getAllStudents, getStudentDetails } from "../controllers/student.js";

const router = express.Router();

router.get("/student/all",getAllStudents)
router.post("/student/new",addNewStudent)
router.get("/student/:id",getStudentDetails)
router.delete("/student/:id",deleteStudent)

export default router