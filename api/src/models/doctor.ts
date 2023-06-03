import { Document, Schema, model } from "mongoose";

export interface IDoctor extends Document {
  firstName: string;
  secondName: string;
  email: string;
  contactNumber: string;
  fieldOfSpeciality: string;
  hospital: string;
  university: string;
}

const DoctorSchema = new Schema<IDoctor>({
  firstName: {
    type: String,
    required: true,
  },
  secondName: {
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
  fieldOfSpeciality: {
    type: String,
    required: true,
  },
  hospital: {
    type: String,
    required: true,
  },
  university: {
    type: String,
    required: true,
  },
});

export const DoctorModel = model<IDoctor>("Doctors", DoctorSchema);
