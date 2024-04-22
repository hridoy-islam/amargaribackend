/* eslint-disable no-unused-vars */
import { Types } from "mongoose";

export interface TDriver {
  _id: Types.ObjectId;
  name: string;
  phone: string;
  licenseFront?: string;
  licenseBack?: string;
  bluebookFront?: string;
  bluebookBack?: string;
  car: string;
  division: string;
  district: string;
  upazila: string;
  isDeleted: boolean;
}
