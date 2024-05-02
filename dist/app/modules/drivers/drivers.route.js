"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DriverRoutes = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("../../middlewares/auth"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const drivers_controller_1 = require("./drivers.controller");
const drivers_validation_1 = require("./drivers.validation");
const multer_1 = require("../../utils/multer");
const router = express_1.default.Router();
router.get("/", drivers_controller_1.DriversControllers.getAllDrivers);
router.get("/:id", drivers_controller_1.DriversControllers.getSingleDriver);
router.post("/", (0, auth_1.default)("admin"), multer_1.upload.fields([
    { name: "licenseFront", maxCount: 1 },
    { name: "licenseBack", maxCount: 1 },
    { name: "bluebookFront", maxCount: 1 },
    { name: "bluebookBack", maxCount: 1 },
]), (0, validateRequest_1.default)(drivers_validation_1.driversValidationSchema), drivers_controller_1.DriversControllers.createDriver);
router.patch("/:id", (0, auth_1.default)("admin"), drivers_controller_1.DriversControllers.updateDriver);
exports.DriverRoutes = router;
