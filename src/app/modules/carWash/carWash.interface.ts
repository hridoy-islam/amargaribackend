/* eslint-disable no-unused-vars */
import { Types } from "mongoose";

export interface TcarWash {
  _id: Types.ObjectId;
  name: string;
  email: string;
  phone: string;
  bodyType:
    | "Saloon"
    | "SUV"
    | "MPV"
    | "Hatchback"
    | "Estate"
    | "Coupe"
    | "Sports"
    | "Convertible";
  brand: string;
  model: string;
  carYear: number;
  servicePackage: string;
  address: string;
  message: string;
  status: "pending" | "approve" | "completed" | "rejected";
  isDeleted: boolean;
}
