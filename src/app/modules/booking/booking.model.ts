/* eslint-disable @typescript-eslint/no-this-alias */
import { Schema, model } from "mongoose";
import { TBooking } from "./booking.interface";

const bookingSchema = new Schema<TBooking>(
  {
    userid: {
      type: Schema.Types.ObjectId,
      required: [true, "User Id is required"],
      ref: "User",
    },
    bookingDate: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    car: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    status: { type: String, default: "pending" },
  },
  {
    timestamps: true,
  }
);

export const Booking = model<TBooking>("Booking", bookingSchema);
