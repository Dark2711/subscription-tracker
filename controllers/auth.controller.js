import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import zod from "zod";
import { User } from "../models/user.model.js";

const signUpSchema = zod.object({
  name: zod.string(),
  email: zod.string().email(),
  password: zod.string(),
});

export const signUp = async (req, res) => {
  try {
    const body = req.body;
    const { success } = signUpSchema.safeParse(body);
    if (!success) {
      return res.status(411).json({
        message: "Invalid Inputs",
      });
    }

    const existingUser = await User.findOne({ email: body.email });
    if (existingUser) {
      return res.status(400).json({
        message: "User already exist with this email",
      });
    }

    // Hash Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(body.password, salt);

    const newUsers = await User.create([
      { name: body.name, email: body.email, password: hashedPassword },
    ]);

    const token = jwt.sign({ userId: newUsers[0]._id }, process.env.JWT_SECRET);

    return res.status(201).json({
      message: "User created successfully",
      data: {
        token: token,
        user: {
          id: newUsers[0]._id,
          name: newUsers[0].name,
          email: newUsers[0].email,
        },
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal server error");
  }
};

const signInSchema = zod.object({
  email: zod.string().email(),
  password: zod.string(),
});
export const signIn = async (req, res) => {
  try {
    const body = req.body;
    const { success } = signInSchema.safeParse(body);
    if (!success) {
      return res.status(411).json({
        message: "Invalid Inputs",
      });
    }

    const user = await User.findOne({ email: body.email });
    if (!user) {
      return res.status(404).json({
        message: "User not found with this email",
      });
    }

    const isPasswordValid = await bcrypt.compare(body.password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({
        message: "Invalid Password",
      });
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    return res.status(200).json({
      message: "Signed In Successfully",
      data: {
        token,
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
        },
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send("Internal server error");
  }
};

export const signOut = async (req, res, next) => {};
