"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarRoutes = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middlewares/auth"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const cars_controller_1 = require("./cars.controller");
const cars_validation_1 = require("./cars.validation");
const router = express_1.default.Router();
router.get("/", cars_controller_1.CarsControllers.getAllCars);
router.get("/:id", cars_controller_1.CarsControllers.getSingleCars);
router.post("/", (0, auth_1.default)("admin", "user"), (0, validateRequest_1.default)(cars_validation_1.carsValidationSchema), cars_controller_1.CarsControllers.createCars);
router.patch("/:id", (0, auth_1.default)("admin"), cars_controller_1.CarsControllers.updateCars);
exports.CarRoutes = router;
