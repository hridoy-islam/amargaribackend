import { RequestHandler } from "express";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import { DriversServices } from "./drivers.service";

const getAllDrivers: RequestHandler = catchAsync(async (req, res) => {
  const result = await DriversServices.getAllDriversFromDB(req.query);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Driver retrived succesfully",
    data: result,
  });
});
const getSingleDriver = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await DriversServices.getSingleDriverFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Driver retrieved succesfully",
    data: result,
  });
});

const updateDriver = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await DriversServices.updateDriverIntoDB(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Driver updated succesfully",
    data: result,
  });
});

const createDriver = catchAsync(async (req, res) => {
  const result = await DriversServices.createDriverIntoDB(req.files, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Driver Added succesfully",
    data: result,
  });
});

export const DriversControllers = {
  createDriver,
  updateDriver,
  getAllDrivers,
  getSingleDriver,
};
