import QueryBuilder from "../../builder/QueryBuilder";
import { TDriver } from "./drivers.interface";
import { Drivers } from "./drivers.model";

const getAllDriversFromDB = async (query: Record<string, unknown>) => {
  const driversQuery = new QueryBuilder(Drivers.find(), query)
    .filter()
    .sort()
    .paginate()
    .fields();

  const meta = await driversQuery.countTotal();
  const result = await driversQuery.modelQuery;

  return {
    meta,
    result,
  };
};

const getSingleDriverFromDB = async (id: string) => {
  const result = await Drivers.findById(id);
  return result;
};

const updateDriverIntoDB = async (id: string, payload: Partial<TDriver>) => {
  const result = await Drivers.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
    upsert: true,
  });

  return result;
};

const createDriverIntoDB = async (payload: TDriver) => {
  const result = await Drivers.create(payload);
  return result;
};

export const DriversServices = {
  createDriverIntoDB,
  updateDriverIntoDB,
  getSingleDriverFromDB,
  getAllDriversFromDB,
};
