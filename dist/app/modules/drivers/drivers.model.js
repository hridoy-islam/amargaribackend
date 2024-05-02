"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Drivers = void 0;
/* eslint-disable @typescript-eslint/no-this-alias */
const mongoose_1 = require("mongoose");
const driverSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
    },
    licenseFront: {
        type: String,
    },
    licenseBack: {
        type: String,
    },
    bluebookFront: {
        type: String,
    },
    bluebookBack: {
        type: String,
    },
    car: {
        type: String,
    },
    division: {
        type: String,
    },
    district: {
        type: String,
    },
    upazila: {
        type: String,
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true,
});
exports.Drivers = (0, mongoose_1.model)("Drivers", driverSchema);
