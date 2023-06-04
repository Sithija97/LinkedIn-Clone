import express, { Request, Response } from "express";
import { DoctorModel, IDoctor } from "../models/doctor.model.js";
import * as doctorService from "../services/doctor.service.js";

const getAllDoctors = async (req: Request, res: Response) => {
  try {
    const doctors = await doctorService.getDoctors();
    res.status(200).json(doctors);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch doctors" });
  }
};

const addDoctor = async (req: Request, res: Response) => {
  try {
    const doctor: IDoctor = req.body;
    const newDoctor = await doctorService.createDoctor(doctor);
    res.status(201).json(newDoctor);
  } catch (error) {
    res.status(500).json({ error: "Failed to create doctor" });
  }
};

const getDoctorById = async (req: Request, res: Response) => {
  try {
    const doctorId = req.params.id;
    const doctor = await doctorService.getDoctorById(doctorId);
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
    const doctor = await doctorService.updateDoctor(doctorId, updatedDoctor);
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
    const doctor = await doctorService.deleteDoctor(doctorId);
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
