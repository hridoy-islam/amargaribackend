import { RequestHandler } from "express";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import { CarWashServices } from "./carWash.service";

const getAllCarWash: RequestHandler = catchAsync(async (req, res) => {
  const result = await CarWashServices.getAllCarWashFromDB(req.query);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Car Wash retrived succesfully",
    data: result,
  });
});
const getSingleCarWash = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await CarWashServices.getSingleCarWashFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Car Wash is retrieved succesfully",
    data: result,
  });
});

const updateCarWash = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await CarWashServices.updateCarWashIntoDB(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Car Wash Service is updated succesfully",
    data: result,
  });
});

const createCarWash = catchAsync(async (req, res) => {
  const result = await CarWashServices.createCarWashIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Car Wash Service Booked succesfully",
    data: result,
  });
});

export const CarWashControllers = {
  getAllCarWash,
  getSingleCarWash,
  updateCarWash,
  createCarWash,
};
