"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingServices = void 0;
const QueryBuilder_1 = __importDefault(require("../../builder/QueryBuilder"));
const booking_constant_1 = require("./booking.constant");
const booking_model_1 = require("./booking.model");
const getAllBookingFromDB = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const bookingQuery = new QueryBuilder_1.default(booking_model_1.Booking.find().populate("userid"), query)
        .search(booking_constant_1.bookingSearchableFields)
        .filter()
        .sort()
        .paginate()
        .fields();
    const meta = yield bookingQuery.countTotal();
    const result = yield bookingQuery.modelQuery;
    return {
        meta,
        result,
    };
});
const getSingleBookingFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield booking_model_1.Booking.findById(id);
    return result;
});
const createBookingIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield booking_model_1.Booking.create(payload);
    return result;
});
const updateBookingIntoDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield booking_model_1.Booking.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true,
        upsert: true,
    });
    return result;
});
exports.BookingServices = {
    getAllBookingFromDB,
    getSingleBookingFromDB,
    createBookingIntoDB,
    updateBookingIntoDB,
};
