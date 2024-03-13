/* eslint-disable @typescript-eslint/no-explicit-any */
import express from "express";
import auth from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import { CarsControllers } from "./cars.controller";
import { carsValidationSchema } from "./cars.validation";

const router = express.Router();
router.get("/", CarsControllers.getAllCars);
router.get("/:id", CarsControllers.getSingleCars);
router.post(
  "/",
  auth("admin", "user"),
  validateRequest(carsValidationSchema),
  CarsControllers.createCars
);
router.patch("/:id", auth("admin"), CarsControllers.updateCars);

export const UserRoutes = router;
