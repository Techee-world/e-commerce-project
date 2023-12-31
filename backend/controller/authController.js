import User from "../moduls/userAuth.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { errorHandler } from "../error/error.js";
import Admin from "../moduls/adminAuth.js";

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

export const AdminSign = async (req, res, next) => {
  const { userName, email, password } = req.body;
  const hashPassword = bcryptjs.hashSync(password, 10);
  const newAdmin = new Admin({ userName, email, password: hashPassword });
  try {
    await newAdmin.save();
    res.status(201).json("user created success");
  } catch (error) {
    next(error);
  }
};
export const AdminLog = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validAdmin = await Admin.findOne({ email });
    if (!validAdmin) return next(errorHandler(404, "admin not found"));
    const validPassword = bcryptjs.compareSync(password, validAdmin.password);
    if (!validPassword)
      return next(errorHandler(401, "password is incorrect please check"));

    const token = jwt.sign({ id: validAdmin._id }, process.env.ADMIN_TOKEN_KEY);
    const { password: pass, ...rest } = validAdmin._doc;
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};
