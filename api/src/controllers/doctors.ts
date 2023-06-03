import express, { Request, Response } from "express";
import { DoctorModel, IDoctor } from "../models/doctor.js";

const getAllDoctors = async (req: Request, res: Response) => {
  try {
    const doctors = await DoctorModel.find();
    res.status(200).json(doctors);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch doctors" });
  }
};

const addDoctor = async (req: Request, res: Response) => {
  try {
    const doctor: IDoctor = req.body;
    const newDoctor = await DoctorModel.create(doctor);
    res.status(201).json(newDoctor);
  } catch (error) {
    res.status(500).json({ error: "Failed to create doctor" });
  }
};

const getDoctorById = async (req: Request, res: Response) => {
  try {
    const doctorId = req.params.id;
    const doctor = await DoctorModel.findById(doctorId);
    if (!doctor) {
      res.status(404).json({ error: "Doctor not found" });
      return;
    }
    res.status(200).json(doctor);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch doctor" });
  }
};

const updateDoctor = async (req: Request, res: Response) => {
  try {
    const doctorId = req.params.id;
    const updatedDoctor: IDoctor = req.body;
    const doctor = await DoctorModel.findByIdAndUpdate(
      doctorId,
      updatedDoctor,
      { new: true }
    );
    if (!doctor) {
      res.status(404).json({ error: "Doctor not found" });
      return;
    }
    res.status(200).json(doctor);
  } catch (error) {
    res.status(500).json({ error: "Failed to update doctor" });
  }
};

const deleteDoctor = async (req: Request, res: Response) => {
  try {
    const doctorId = req.params.id;
    const doctor = await DoctorModel.findByIdAndDelete(doctorId);
    if (!doctor) {
      res.status(404).json({ error: "Doctor not found" });
      return;
    }
    res.status(200).json({ message: "Doctor deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete doctor" });
  }
};

export { getAllDoctors, addDoctor, getDoctorById, updateDoctor, deleteDoctor };
