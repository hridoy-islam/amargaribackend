/* eslint-disable no-unused-vars */
import { Types } from "mongoose";

export interface TCars {
  _id: Types.ObjectId;
  title: string;
  brand: string;
  color: string;
  model: string;
  registration_year: string;
  production_year: string;
  condition: string;
  transmition: string;
  fuelType: string[];
  engine_capacity: string;
  kilometer: string;
  details: string;
  gallery: string[];
  price: string;
  phone: string;
  district: string;
  upazila: string;
  userid: Types.ObjectId;
  status: "pending" | "approve" | "sold";
  isDeleted: boolean;
}
