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
exports.DriversServices = void 0;
const QueryBuilder_1 = __importDefault(require("../../builder/QueryBuilder"));
const drivers_constant_1 = require("./drivers.constant");
const drivers_model_1 = require("./drivers.model");
const getAllDriversFromDB = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const driversQuery = new QueryBuilder_1.default(drivers_model_1.Drivers.find(), query)
        .search(drivers_constant_1.driverSearchableFields)
        .filter()
        .sort()
        .paginate()
        .fields();
    const meta = yield driversQuery.countTotal();
    const result = yield driversQuery.modelQuery;
    return {
        meta,
        result,
    };
});
const getSingleDriverFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield drivers_model_1.Drivers.findById(id);
    return result;
});
const updateDriverIntoDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield drivers_model_1.Drivers.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true,
        upsert: true,
    });
    return result;
});
const createDriverIntoDB = (files, payload) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, phone, car, division, district, upazila } = payload;
        const { licenseFront, licenseBack, bluebookFront, bluebookBack } = files;
        const driverData = {
            name,
            phone,
            car,
            division,
            district,
            upazila,
            licenseFront: licenseFront[0].filename,
            licenseBack: licenseBack[0].filename,
            bluebookFront: bluebookFront[0].filename,
            bluebookBack: bluebookBack[0].filename,
        };
        const result = yield drivers_model_1.Drivers.create(driverData);
        return result;
    }
    catch (error) {
        throw new Error("Something wrong");
    }
});
exports.DriversServices = {
    createDriverIntoDB,
    updateDriverIntoDB,
    getSingleDriverFromDB,
    getAllDriversFromDB,
};
