/* eslint-disable @typescript-eslint/no-this-alias */
import { Schema, model } from "mongoose";
import { TCars } from "./cars.interface";

const carsSchema = new Schema<TCars>(
  {
    title: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
    },
    color: {
      type: String,
    },
    model: {
      type: String,
    },
    registration_year: {
      type: String,
    },
    production_year: {
      type: String,
    },
    condition: {
      type: String,
    },
    transmition: {
      type: String,
    },
    fuelType: {
      type: [],
    },
    engine_capacity: {
      type: String,
    },
    kilometer: {
      type: String,
    },
    details: {
      type: String,
    },
    gallery: {
      type: [],
    },
    price: {
      type: String,
    },
    phone: { type: String, required: true },
    division: {
      type: String,
    },
    district: {
      type: String,
    },
    upazila: {
      type: String,
    },
    userid: { type: Schema.Types.ObjectId, required: true, ref: "User" },
    status: {
      type: String,
      enum: ["pending", "approve", "sold"],
      default: "pending",
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const Cars = model<TCars>("Cars", carsSchema);
