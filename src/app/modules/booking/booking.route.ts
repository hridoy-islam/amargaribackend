/* eslint-disable @typescript-eslint/no-explicit-any */
import express from "express";
import auth from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import { BookingControllers } from "./booking.controller";
import { bookingValidationSchema } from "./booking.validation";

const router = express.Router();
router.get("/", auth("admin", "user"), BookingControllers.getAllBookings);
router.get("/:id", auth("admin", "user"), BookingControllers.getSingleBooking);
router.post(
  "/",
  auth("admin", "user"),
  validateRequest(bookingValidationSchema),
  BookingControllers.createBooking
);
router.patch("/:id", auth("admin"), BookingControllers.updateBooking);
export const BookingRoutes = router;
