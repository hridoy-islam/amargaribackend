"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactRoutes = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middlewares/auth"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const contact_controller_1 = require("./contact.controller");
const contact_validation_1 = require("./contact.validation");
const router = express_1.default.Router();
router.get("/", (0, auth_1.default)("admin"), contact_controller_1.ContactControllers.getAllContacts);
router.get("/:id", (0, auth_1.default)("admin"), contact_controller_1.ContactControllers.getSingleContact);
router.post("/", (0, validateRequest_1.default)(contact_validation_1.contactValidationSchema), contact_controller_1.ContactControllers.createContact);
exports.ContactRoutes = router;
