"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.carsValidationSchema = void 0;
const zod_1 = require("zod");
const FuelTypeSchema = zod_1.z.object({
    value: zod_1.z.string(),
    label: zod_1.z.string(),
});
exports.carsValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string(),
        brand: zod_1.z.string(),
        color: zod_1.z.string(),
        model: zod_1.z.string(),
        registration_year: zod_1.z.string(),
        production_year: zod_1.z.string(),
        condition: zod_1.z.string(),
        transmition: zod_1.z.string(),
        fuelType: zod_1.z.array(FuelTypeSchema),
        engine_capacity: zod_1.z.string(),
        kilometer: zod_1.z.string(),
        details: zod_1.z.string(),
        gallery: zod_1.z.string().array(),
        price: zod_1.z.string(),
        phone: zod_1.z.string(),
        division: zod_1.z.string(),
        district: zod_1.z.string(),
        upazila: zod_1.z.string(),
        userid: zod_1.z.string(),
    }),
});
