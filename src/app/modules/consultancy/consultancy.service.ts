import QueryBuilder from "../../builder/QueryBuilder";
import { TConsultancy } from "./consultancy.interface";
import { Consultancy } from "./consultancy.model";

const getAllConsultancyFromDB = async (query: Record<string, unknown>) => {
  const consultancyQuery = new QueryBuilder(Consultancy.find(), query)
    .filter()
    .sort()
    .paginate()
    .fields();

  const meta = await consultancyQuery.countTotal();
  const result = await consultancyQuery.modelQuery;

  return {
    meta,
    result,
  };
};

const getSingleConsultancyFromDB = async (id: string) => {
  const result = await Consultancy.findById(id);
  return result;
};

const updateConsultancyIntoDB = async (
  id: string,
  payload: Partial<TConsultancy>
) => {
  const result = await Consultancy.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
    upsert: true,
  });

  return result;
};

const createConsultancyIntoDB = async (payload: TConsultancy) => {
  const result = await Consultancy.create(payload);
  return result;
};

export const ConsultancyServices = {
  getAllConsultancyFromDB,
  getSingleConsultancyFromDB,
  updateConsultancyIntoDB,
  createConsultancyIntoDB,
};
