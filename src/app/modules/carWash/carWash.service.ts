import QueryBuilder from "../../builder/QueryBuilder";
import { TcarWash } from "./carWash.interface";
import { CarWash } from "./carWash.model";

const getAllCarWashFromDB = async (query: Record<string, unknown>) => {
  const carWashQuery = new QueryBuilder(CarWash.find(), query)
    .filter()
    .sort()
    .paginate()
    .fields();

  const meta = await carWashQuery.countTotal();
  const result = await carWashQuery.modelQuery;

  return {
    meta,
    result,
  };
};

const getSingleCarWashFromDB = async (id: string) => {
  const result = await CarWash.findById(id);
  return result;
};

const updateCarWashIntoDB = async (id: string, payload: Partial<TcarWash>) => {
  const result = await CarWash.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
    upsert: true,
  });

  return result;
};

const createCarWashIntoDB = async (payload: TcarWash) => {
  const result = await CarWash.create(payload);
  return result;
};

export const CarWashServices = {
  getAllCarWashFromDB,
  getSingleCarWashFromDB,
  updateCarWashIntoDB,
  createCarWashIntoDB,
};
