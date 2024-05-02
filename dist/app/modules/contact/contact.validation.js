"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactValidationSchema = void 0;
const zod_1 = require("zod");
exports.contactValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string(),
        phone: zod_1.z.string(),
        email: zod_1.z.string(),
        message: zod_1.z.string(),
    }),
});
