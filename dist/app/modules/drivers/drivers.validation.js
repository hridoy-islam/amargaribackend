"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.driversValidationSchema = void 0;
const zod_1 = require("zod");
exports.driversValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string(),
        phone: zod_1.z.string(),
        licenseFront: zod_1.z.string().optional(),
        licenseBack: zod_1.z.string().optional(),
        bluebookFront: zod_1.z.string().optional(),
        bluebookBack: zod_1.z.string().optional(),
        car: zod_1.z.string(),
        division: zod_1.z.string(),
        district: zod_1.z.string(),
        upazila: zod_1.z.string(),
    }),
});
