/* eslint-disable @typescript-eslint/no-this-alias */
import { Schema, model } from "mongoose";
import { TDriver } from "./drivers.interface";

const driverSchema = new Schema<TDriver>(
  {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
    },
    licenseFront: {
      type: String,
    },
    licenseBack: {
      type: String,
    },
    bluebookFront: {
      type: String,
    },
    bluebookBack: {
      type: String,
    },
    car: {
      type: String,
    },
    division: {
      type: String,
    },
    district: {
      type: String,
    },
    upazila: {
      type: String,
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

export const Drivers = model<TDriver>("Drivers", driverSchema);
