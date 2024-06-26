"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthValidations = void 0;
const zod_1 = require("zod");
const loginValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        phone: zod_1.z.string({ required_error: "Phone is required." }),
        password: zod_1.z.string({ required_error: "Password is required" }),
    }),
});
const forgetPasswordValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z.string({
            required_error: "User email is required!",
        }),
    }),
});
const createUserValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({ required_error: "User Name is Required" }),
        phone: zod_1.z.string({ required_error: "User Phone is Required" }),
        email: zod_1.z.string({ required_error: "User Email is Required" }),
        password: zod_1.z.string({ required_error: "Password required" }),
    }),
});
exports.AuthValidations = {
    loginValidationSchema,
    forgetPasswordValidationSchema,
    createUserValidationSchema,
};
