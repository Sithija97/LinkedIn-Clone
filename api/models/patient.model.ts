import { Document, Schema, model } from "mongoose";
import { UserRole } from "../enums/index.js";

export interface IPatient extends Document {
  userType: string;
  firstName: string;
  lastName: string;
  email: string;
  contactNumber: string;
  age: number;
  address: string;
  password: string;
}

const PatientSchema = new Schema<IPatient>({
  userType: {
    type: String,
    enum: [UserRole.PATIENT],
    required: true,
    default: UserRole.PATIENT,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
});

export const PatientModel = model<IPatient>("Patient", PatientSchema);
