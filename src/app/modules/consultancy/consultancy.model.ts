/* eslint-disable @typescript-eslint/no-this-alias */
import { Schema, model } from "mongoose";
import { TConsultancy } from "./consultancy.interface";

const consultancySchema = new Schema<TConsultancy>(
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
    message: { type: String },
    time: { type: String },
    date: { type: String },
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

export const Consultancy = model<TConsultancy>(
  "Consultancy",
  consultancySchema
);
