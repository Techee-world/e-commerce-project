import User from "../moduls/userAuth.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../error/error.js";
import jwt from "jsonwebtoken";

export const Signup = async (req, res, next) => {
  const { userName, email, password } = req.body;
  const hashPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ userName, email, password: hashPassword });
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
    if (!validUser) return next(errorHandler(404, "user not found"));
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    console.log(password, "****");
    console.log(validUser.password, "$$$$$");
    console.log(validPassword, "validPassword");

    if (!validPassword) return next(errorHandler(401, "password is incorrect please check"));
    
    const token = jwt.sign({ id: validUser._id }, process.env.TOKEN_KEY);
    const { password: pass, ...rest } = validUser._doc;
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};
