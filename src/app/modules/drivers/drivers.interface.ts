/* eslint-disable no-unused-vars */
import { Types } from "mongoose";

export interface TDriver {
  _id: Types.ObjectId;
  name: string;
  phone: string;
  license: string[];
  bluebook: string[];
  car: string;
  district: string;
  upazila: string;
  isDeleted: boolean;
}
