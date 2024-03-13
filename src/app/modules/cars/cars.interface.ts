/* eslint-disable no-unused-vars */
import { Types } from "mongoose";

export interface TCars {
  _id: Types.ObjectId;
  title: string;
  brand: string;
  edition: string;
  model: string;
  registration_year: number;
  production_year: number;
  condition: string;
  transmition: string;
  fuelType: string[];
  engine_capacity: number;
  kilometer: number;
  details: string;
  gallery: string[];
  price: number;
  bodyType:
    | "Saloon"
    | "SUV"
    | "MPV"
    | "Hatchback"
    | "Estate"
    | "Coupe"
    | "Sports"
    | "Convertible";

  phone: string;
  district: string;
  upazila: string;
  userid: Types.ObjectId;
  status: "pending" | "approve" | "sold";
  isDeleted: boolean;
}
