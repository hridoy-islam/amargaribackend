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
exports.CarsServices = void 0;
const QueryBuilder_1 = __importDefault(require("../../builder/QueryBuilder"));
const cars_model_1 = require("./cars.model");
const car_constant_1 = require("./car.constant");
const getAllCarsFromDB = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const carsQuery = new QueryBuilder_1.default(cars_model_1.Cars.find().populate("userid"), query)
        .search(car_constant_1.carSearchableFields)
        .filter()
        .sort()
        .paginate()
        .fields();
    const meta = yield carsQuery.countTotal();
    const result = yield carsQuery.modelQuery;
    return {
        meta,
        result,
    };
});
const getSingleCarsFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield cars_model_1.Cars.findById(id);
    return result;
});
const updateCarsIntoDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield cars_model_1.Cars.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true,
        upsert: true,
    });
    return result;
});
const createCarsIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield cars_model_1.Cars.create(payload);
    return result;
});
exports.CarsServices = {
    getAllCarsFromDB,
    getSingleCarsFromDB,
    updateCarsIntoDB,
    createCarsIntoDB,
};
