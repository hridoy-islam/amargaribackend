import { RequestHandler } from "express";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import { CarsServices } from "./cars.service";

const getAllCars: RequestHandler = catchAsync(async (req, res) => {
  const result = await CarsServices.getAllCarsFromDB(req.query);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Cars retrived succesfully",
    data: result,
  });
});
const getSingleCars = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await CarsServices.getSingleCarsFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Cars retrieved succesfully",
    data: result,
  });
});

const updateCars = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await CarsServices.updateCarsIntoDB(id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Car updated succesfully",
    data: result,
  });
});

const createCars = catchAsync(async (req, res) => {
  const result = await CarsServices.createCarsIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Car Added succesfully",
    data: result,
  });
});

export const CarsControllers = {
  createCars,
  updateCars,
  getSingleCars,
  getAllCars,
};
