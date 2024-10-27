import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

const loginUser = async (req, res) => {};

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

const registerUser = async (req, res) => {
  const { name, password, email } = req.body;
  try {
    //? Check if user already exists
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({ sccess: false, message: "User already exists..." });
    }

    //? Validate email format and strong pw
    if (!validator.isEmail(email)) {
      return res.json({
        sccess: false,
        message: "Please enter valid email...",
      });
    }

    if (password.length < 8) {
      return res.json({
        sccess: false,
        message: "Please enter a strong password...",
      });
    }

    //? Hashing user password
    const salt = await bcrypt.genSalt(10);
    const hashedPw = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      name: name,
      email: email,
      password: hashedPw,
    });

    const user = await newUser.save();
    const token = createToken(user._id);
    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

export { loginUser, registerUser };
