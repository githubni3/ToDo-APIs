import { User } from "../models/user.js";
import bcrypt from "bcrypt";
import { setCookie } from "../utils/setCookie.js";
import ErrorHandler from "../middlewares/error.js";

export const register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;

    const isFound = await User.findOne({ email });
    if (isFound) {
      return next(new ErrorHandler("User Already Exist", 409));
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = User.create({
      name,
      email,
      password: hashedPassword,
    });

    setCookie(newUser, res, "User Added Successfully.", 201);
  } catch (error) {
    next(error);
  }
};
export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // here we are using  select with +password that means we will get all data of user along with the password
    // select is used for getting some selective data form all the data
    //if we will use select("password") -- it will give us only password but we are using select("+password") -- it will give us all data along with password

    const userData = await User.findOne({ email }).select("+password");
    if (!userData) {
      return next(new ErrorHandler("Incorrect email or password", 401));
    }

    const isMatch = await bcrypt.compare(password, userData.password);

    if (!isMatch) {
      return next(new ErrorHandler("Incorrect email or password", 401));
    }
    setCookie(userData, res, `Welcome ${userData.name}`, 200);
  } catch (error) {
    next(error);
  }
};
export const getMyProfile = (req, res) => {
  res.json({
    success: true,
    user: req.user,
  });
};
export const logout = (req, res) => {
  res
    .status(200)
    .cookie("token", "", {
      expires: new Date(Date.now()),
      sameSite: process.env.NODE_ENV === "Development" ? "lax" : "none",
      secure: process.env.NODE_ENV === "Development" ? false : true,
    })
    .json({
      success: true,
      message: "Logged Out Successfully",
    });
};
