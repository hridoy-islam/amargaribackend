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
exports.AuthServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const user_model_1 = require("../user/user.model");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../../config"));
const auth_utils_1 = require("./auth.utils");
const sendEmail_1 = require("../../utils/sendEmail");
const checkLogin = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const foundUser = yield user_model_1.User.isUserExists(payload.phone);
        console.log(foundUser);
        if (!foundUser) {
            throw new AppError_1.default(http_status_1.default.NOT_FOUND, "Login Detials is not correct");
        }
        if (foundUser.isDeleted) {
            throw new AppError_1.default(http_status_1.default.NOT_FOUND, "This Account Has Been Deleted.");
        }
        if (!(yield user_model_1.User.isPasswordMatched(payload === null || payload === void 0 ? void 0 : payload.password, foundUser === null || foundUser === void 0 ? void 0 : foundUser.password)))
            throw new AppError_1.default(http_status_1.default.FORBIDDEN, "Password do not matched");
        const accessToken = jsonwebtoken_1.default.sign({
            _id: (_a = foundUser._id) === null || _a === void 0 ? void 0 : _a.toString(),
            email: foundUser === null || foundUser === void 0 ? void 0 : foundUser.email,
            phone: foundUser === null || foundUser === void 0 ? void 0 : foundUser.phone,
            name: foundUser === null || foundUser === void 0 ? void 0 : foundUser.name,
            role: foundUser === null || foundUser === void 0 ? void 0 : foundUser.role,
        }, `${config_1.default.jwt_access_secret}`, {
            expiresIn: "2 days",
        });
        return {
            accessToken,
        };
    }
    catch (error) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "Details doesnt match");
    }
});
const createUserIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.User.isUserExists(payload.phone);
    if (user) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "This user is already exits!");
    }
    const result = yield user_model_1.User.create(payload);
    return result;
});
const forgetPassword = (email) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.User.isUserExists(email);
    if (!user) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "This user is not found !");
    }
    const jwtPayload = {
        email: user.email,
        role: user.role,
    };
    const resetToken = (0, auth_utils_1.createToken)(jwtPayload, config_1.default.jwt_access_secret, "10m");
    const resetUILink = `${config_1.default.reset_pass_ui_link}?id=${user.email}&token=${resetToken} `;
    (0, sendEmail_1.sendEmail)(user.email, resetUILink);
});
const resetPassword = (payload, token) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.User.isUserExists(payload === null || payload === void 0 ? void 0 : payload.email);
    if (!user) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, "This user is not found !");
    }
    const decoded = jsonwebtoken_1.default.verify(token, config_1.default.jwt_access_secret);
    if (payload.email !== decoded.email) {
        throw new AppError_1.default(http_status_1.default.FORBIDDEN, "You are forbidden!");
    }
    const newHashedPassword = yield bcrypt_1.default.hash(payload.newPassword, Number(config_1.default.bcrypt_salt_rounds));
    yield user_model_1.User.findOneAndUpdate({ email: decoded.email, role: decoded.role }, {
        password: newHashedPassword,
    });
});
exports.AuthServices = {
    checkLogin,
    createUserIntoDB,
    resetPassword,
    forgetPassword,
};
