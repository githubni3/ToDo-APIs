import express from "express";
// import { user } from "../models/user.js";
import { register,login,logout, getMyProfile } from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

router.post("/new",register)
router.post("/login",login)
router.get("/logout",logout)
router.get("/profile",isAuthenticated, getMyProfile)

export default router