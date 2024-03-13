import { RequestHandler } from "express";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import { ConsultancyServices } from "./consultancy.service";

const getAllConsultancy: RequestHandler = catchAsync(async (req, res) => {
  const result = await ConsultancyServices.getAllConsultancyFromDB(req.query);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Consultancy retrived succesfully",
    data: result,
  });
});
const getSingleConsultancy = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ConsultancyServices.getSingleConsultancyFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Consultancy retrieved succesfully",
    data: result,
  });
});

const updateConsultancy = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ConsultancyServices.updateConsultancyIntoDB(
    id,
    req.body
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Consultancy Service is updated succesfully",
    data: result,
  });
});

const createConsultancy = catchAsync(async (req, res) => {
  const result = await ConsultancyServices.createConsultancyIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Consultancy Service Booked succesfully",
    data: result,
  });
});

export const ConsultancyControllers = {
  getAllConsultancy,
  getSingleConsultancy,
  updateConsultancy,
  createConsultancy,
};
