import express, { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import generateToken from "../utils/generateToken.js";
import Doctor from "../models/doctor.model.js";
import { CustomRequest } from "../interfaces/index.js";

const registerDoctor = asyncHandler(async (req: Request, res: Response) => {
  const {
    userType,
    firstName,
    secondName,
    email,
    contactNumber,
    fieldOfSpeciality,
    hospital,
    university,
    password,
  } = req.body;
  const userExists = await Doctor.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await Doctor.create({
    userType,
    firstName,
    secondName,
    email,
    contactNumber,
    fieldOfSpeciality,
    hospital,
    university,
    password,
  });

  if (user) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      userType: user.userType,
      firstName: user.firstName,
      secondName: user.secondName,
      email: user.email,
      contactNumber: user.contactNumber,
      fieldOfSpeciality: user.fieldOfSpeciality,
      hospital: user.hospital,
      university: user.university,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

const loginDoctor = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const user = await Doctor.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);

    res.json({
      _id: user._id,
      userType: user.userType,
      firstName: user.firstName,
      secondName: user.secondName,
      email: user.email,
      contactNumber: user.contactNumber,
      fieldOfSpeciality: user.fieldOfSpeciality,
      hospital: user.hospital,
      university: user.university,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

const logoutDoctor = asyncHandler(async (req: Request, res: Response) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: "Logged out successfully" });
});

const getAllDoctors = asyncHandler(async (req: Request, res: Response) => {
  res.status(200).json({ message: "get all" });
});

const getDoctorById = asyncHandler(
  async (req: CustomRequest, res: Response) => {
    const user = {
      _id: req.user?._id,
      userType: req.user?.userType,
      firstName: req.user?.firstName,
      secondName: req.user?.secondName,
      email: req.user?.email,
      contactNumber: req.user?.contactNumber,
      fieldOfSpeciality: req.user?.fieldOfSpeciality,
      hospital: req.user?.hospital,
      university: req.user?.university,
    };
    res.status(200).json(user);
  }
);

const updateDoctor = asyncHandler(async (req: Request, res: Response) => {
  res.status(200).json({ message: "update" });
});

export {
  registerDoctor,
  loginDoctor,
  logoutDoctor,
  getAllDoctors,
  getDoctorById,
  updateDoctor,
};
