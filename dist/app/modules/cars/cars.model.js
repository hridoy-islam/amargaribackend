"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cars = void 0;
/* eslint-disable @typescript-eslint/no-this-alias */
const mongoose_1 = require("mongoose");
const carsSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    brand: {
        type: String,
    },
    color: {
        type: String,
    },
    model: {
        type: String,
    },
    registration_year: {
        type: String,
    },
    production_year: {
        type: String,
    },
    condition: {
        type: String,
    },
    transmition: {
        type: String,
    },
    fuelType: {
        type: [],
    },
    engine_capacity: {
        type: String,
    },
    kilometer: {
        type: String,
    },
    details: {
        type: String,
    },
    gallery: {
        type: [],
    },
    price: {
        type: String,
    },
    phone: { type: String, required: true },
    division: {
        type: String,
    },
    district: {
        type: String,
    },
    upazila: {
        type: String,
    },
    userid: { type: mongoose_1.Schema.Types.ObjectId, required: true, ref: "User" },
    status: {
        type: String,
        enum: ["pending", "approve", "sold"],
        default: "pending",
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true,
});
exports.Cars = (0, mongoose_1.model)("Cars", carsSchema);
