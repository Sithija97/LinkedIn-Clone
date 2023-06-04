import { Document, Schema, model } from "mongoose";

interface IPatient extends Document {
  firstName: string;
  lastName: string;
  email: string;
  contactNumber: string;
  age: number;
  address: string;
}

const PatientSchema = new Schema<IPatient>({
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
});

export const PatientModel = model<IPatient>("Patients", PatientSchema);
