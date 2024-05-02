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
exports.ContactServices = void 0;
const QueryBuilder_1 = __importDefault(require("../../builder/QueryBuilder"));
const contact_constant_1 = require("./contact.constant");
const contact_model_1 = require("./contact.model");
const getAllContactFromDB = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const contactQuery = new QueryBuilder_1.default(contact_model_1.Contact.find(), query)
        .search(contact_constant_1.contactSearchableFields)
        .filter()
        .sort()
        .paginate()
        .fields();
    const meta = yield contactQuery.countTotal();
    const result = yield contactQuery.modelQuery;
    return {
        meta,
        result,
    };
});
const getSingleContactFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield contact_model_1.Contact.findById(id);
    return result;
});
const createContactIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield contact_model_1.Contact.create(payload);
    return result;
});
exports.ContactServices = {
    getAllContactFromDB,
    getSingleContactFromDB,
    createContactIntoDB,
};
