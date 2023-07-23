import mongoose, { Document, Schema, model } from "mongoose";
import bcrypt from "bcryptjs";
import { UserRole } from "../enums/index.js";
import { IDoctor } from "../interfaces/index.js";

const DoctorSchema = new Schema<IDoctor>({
  userType: {
    type: String,
    required: true,
    default: UserRole.USER,
  },
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
  password: {
    type: String,
    required: true,
  },
});

DoctorSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

DoctorSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const Doctor = mongoose.model("Doctor", DoctorSchema);
export default Doctor;
