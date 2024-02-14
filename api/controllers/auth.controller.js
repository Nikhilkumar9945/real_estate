import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";
export const signup = async (req, res, next) => {
  const { username, email, passward } = req.body;
  const hashedPassward = bcryptjs.hashSync(passward, 10);
  const newUser = new User({ username, email, passward: hashedPassward });
  try {
    await newUser.save();
    res.status(201).json("User created successfully!");
  } catch (error) {
    next(error);
  }
};
export const signin = async (req, res, next) => {
  const { email, passward } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) return next(errorHandler(404, "User not found!"));
    const validPassward = bcryptjs.compareSync(passward, validUser.passward);
    if (!validUser) return next(errorHandler(401, "Wrong Crendential!"));
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const { passward: pass, ...rest } = validUser._doc;
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};
