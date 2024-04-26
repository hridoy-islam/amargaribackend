import { RequestHandler } from "express";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";
import { ContactServices } from "./contact.service";

const getAllContacts: RequestHandler = catchAsync(async (req, res) => {
  const result = await ContactServices.getAllContactFromDB(req.query);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Contacts retrived succesfully",
    data: result,
  });
});

const getSingleContact = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ContactServices.getSingleContactFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Contacts retrieved succesfully",
    data: result,
  });
});

const createContact = catchAsync(async (req, res) => {
  const result = await ContactServices.createContactIntoDB(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Contact Created succesfully",
    data: result,
  });
});

export const ContactControllers = {
  getAllContacts,
  getSingleContact,
  createContact,
};
