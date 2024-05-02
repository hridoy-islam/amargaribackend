"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingRoutes = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middlewares/auth"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const booking_controller_1 = require("./booking.controller");
const booking_validation_1 = require("./booking.validation");
const router = express_1.default.Router();
router.get("/", (0, auth_1.default)("admin", "user"), booking_controller_1.BookingControllers.getAllBookings);
router.get("/:id", (0, auth_1.default)("admin", "user"), booking_controller_1.BookingControllers.getSingleBooking);
router.post("/", (0, auth_1.default)("admin", "user"), (0, validateRequest_1.default)(booking_validation_1.bookingValidationSchema), booking_controller_1.BookingControllers.createBooking);
router.patch("/:id", (0, auth_1.default)("admin"), booking_controller_1.BookingControllers.updateBooking);
exports.BookingRoutes = router;
