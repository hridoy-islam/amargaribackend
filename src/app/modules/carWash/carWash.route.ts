/* eslint-disable @typescript-eslint/no-explicit-any */
import express from "express";
import { CarWashControllers } from "./carWash.controller";
import auth from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import { carWashValidationSchema } from "./carWash.validation";

const router = express.Router();
router.get("/", auth("admin", "user"), CarWashControllers.getAllCarWash);
router.get("/:id", auth("admin", "user"), CarWashControllers.getSingleCarWash);
router.post(
  "/",
  auth("admin", "user"),
  validateRequest(carWashValidationSchema),
  CarWashControllers.createCarWash
);
router.patch("/:id", auth("admin"), CarWashControllers.updateCarWash);

export const UserRoutes = router;
