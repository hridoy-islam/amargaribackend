/* eslint-disable @typescript-eslint/no-explicit-any */
import express from "express";
import auth from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import { DriversControllers } from "./drivers.controller";
import { driversValidationSchema } from "./drivers.validation";
import { upload } from "../../utils/multer";

const router = express.Router();
router.get("/", DriversControllers.getAllDrivers);
router.get("/:id", DriversControllers.getSingleDriver);
router.post(
  "/",
  auth("admin"),
  upload.fields([
    { name: "licenseFront", maxCount: 1 },
    { name: "licenseBack", maxCount: 1 },
    { name: "bluebookFront", maxCount: 1 },
    { name: "bluebookBack", maxCount: 1 },
  ]),
  validateRequest(driversValidationSchema),
  DriversControllers.createDriver
);
router.patch("/:id", auth("admin"), DriversControllers.updateDriver);

export const DriverRoutes = router;
