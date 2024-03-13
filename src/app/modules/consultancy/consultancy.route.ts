/* eslint-disable @typescript-eslint/no-explicit-any */
import express from "express";
import auth from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import { ConsultancyControllers } from "./consultancy.controller";
import { consultancyValidationSchema } from "./consultancy.validation";

const router = express.Router();
router.get(
  "/",
  auth("admin", "user"),
  ConsultancyControllers.getAllConsultancy
);
router.get(
  "/:id",
  auth("admin", "user"),
  ConsultancyControllers.getSingleConsultancy
);
router.post(
  "/",
  auth("admin", "user"),
  validateRequest(consultancyValidationSchema),
  ConsultancyControllers.createConsultancy
);
router.patch("/:id", auth("admin"), ConsultancyControllers.updateConsultancy);

export const UserRoutes = router;
