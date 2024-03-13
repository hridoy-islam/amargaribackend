/* eslint-disable @typescript-eslint/no-this-alias */
import { Schema, model } from "mongoose";
import { TcarWash } from "./carWash.interface";

const carWashSchema = new Schema<TcarWash>(
  {
    name: {
      type: String,
      required: true,
    },
    phone: { type: String, required: true },
    email: {
      type: String,
      required: true,
    },
    bodyType: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
    },
    model: {
      type: String,
    },
    carYear: {
      type: Number,
    },
    servicePackage: { type: String },
    address: { type: String },
    message: { type: String },
    status: {
      type: String,
      enum: ["pending", "approve", "completed", "rejected"],
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

export const CarWash = model<TcarWash>("CarWash", carWashSchema);
