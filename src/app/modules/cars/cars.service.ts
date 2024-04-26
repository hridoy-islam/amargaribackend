import QueryBuilder from "../../builder/QueryBuilder";
import { Cars } from "./cars.model";
import { TCars } from "./cars.interface";
import { carSearchableFields } from "./car.constant";

const getAllCarsFromDB = async (query: Record<string, unknown>) => {
  const carsQuery = new QueryBuilder(Cars.find(), query)
    .search(carSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();

  const meta = await carsQuery.countTotal();
  const result = await carsQuery.modelQuery;

  return {
    meta,
    result,
  };
};

const getSingleCarsFromDB = async (id: string) => {
  const result = await Cars.findById(id);
  return result;
};

const updateCarsIntoDB = async (id: string, payload: Partial<TCars>) => {
  const result = await Cars.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
    upsert: true,
  });

  return result;
};

const createCarsIntoDB = async (payload: TCars) => {
  const result = await Cars.create(payload);
  return result;
};

export const CarsServices = {
  getAllCarsFromDB,
  getSingleCarsFromDB,
  updateCarsIntoDB,
  createCarsIntoDB,
};
