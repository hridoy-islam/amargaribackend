"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookingValidationSchema = void 0;
const zod_1 = require("zod");
exports.bookingValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        userid: zod_1.z.string(),
        bookingDate: zod_1.z.string(),
        name: zod_1.z.string(),
        phone: zod_1.z.string(),
        car: zod_1.z.string(),
        message: zod_1.z.string(),
        address: zod_1.z.string(),
        status: zod_1.z.string().optional(),
    }),
});
