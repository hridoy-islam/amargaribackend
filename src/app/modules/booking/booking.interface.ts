import { Types } from "mongoose";

export interface TBooking {
  userid: Types.ObjectId;
  bookingDate: string;
  name: string;
  phone: string;
  car: string;
  message: string;
  address: string;
  status?: string;
}
