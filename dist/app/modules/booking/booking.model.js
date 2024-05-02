"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Booking = void 0;
/* eslint-disable @typescript-eslint/no-this-alias */
const mongoose_1 = require("mongoose");
const bookingSchema = new mongoose_1.Schema({
    userid: {
        type: mongoose_1.Schema.Types.ObjectId,
        required: [true, "User Id is required"],
        ref: "User",
    },
    bookingDate: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    car: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    status: { type: String, default: "pending" },
}, {
    timestamps: true,
});
exports.Booking = (0, mongoose_1.model)("Booking", bookingSchema);
