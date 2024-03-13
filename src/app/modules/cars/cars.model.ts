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
    edition: {
      type: String,
    },
    model: {
      type: String,
    },
    registration_year: {
      type: Number,
    },
    production_year: {
      type: Number,
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
      type: Number,
    },
    kilometer: {
      type: Number,
    },
    details: {
      type: String,
    },
    gallery: {
      type: [],
    },
    price: {
      type: Number,
    },

    bodyType: {
      type: String,
      required: true,
    },
    phone: { type: String, required: true },
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
