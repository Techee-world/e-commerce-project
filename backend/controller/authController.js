import User from "../moduls/userAuth.js";
import bcryptjs from 'bcryptjs'
import jwt from "jsonwebtoken";
import { errorHandler } from "../error/error.js";

export const Signup = async (req, res, next) => {
  const { userName, email, password } = req.body;
  const newUser = new User({ userName, email, password });
  try {
    await newUser.save();
    res.status(201).json("user created success");
  } catch (error) {
    next(error);
  }
};
export const Login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validUser) return next(errorHandler(404,'user not found'))
    if (!validPassword)  return next(errorHandler(401,'password is incorrect'))
    const token = jwt.sign({ id: validUser._id }, process.env.TOKEN_KEY);
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(validUser);
  } catch (error) {
    next(error);
  }
};
