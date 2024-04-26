/* eslint-disable @typescript-eslint/no-explicit-any */
import express from "express";
import auth from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import { ContactControllers } from "./contact.controller";
import { contactValidationSchema } from "./contact.validation";

const router = express.Router();
router.get("/", auth("admin"), ContactControllers.getAllContacts);
router.get("/:id", auth("admin"), ContactControllers.getSingleContact);
router.post(
  "/",
  validateRequest(contactValidationSchema),
  ContactControllers.createContact
);

export const ContactRoutes = router;
