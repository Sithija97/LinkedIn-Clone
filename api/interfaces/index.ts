import { Request } from "express";
import { Document } from "mongoose";

export interface IDoctor extends Document {
  userType: string;
  firstName: string;
  secondName: string;
  email: string;
  contactNumber: string;
  fieldOfSpeciality: string;
  hospital: string;
  university: string;
  password: string;
  matchPassword(enteredPassword: string): Promise<boolean>;
}

export interface CustomRequest extends Request {
  user: {
    _id: string;
    userType: string;
    firstName: string;
    secondName: string;
    email: string;
    contactNumber: string;
    fieldOfSpeciality: string;
    hospital: string;
    university: string;
  };
}

export interface IError extends Error {
  message: string;
  name: string;
  kind: string;
  stack: any;
}
