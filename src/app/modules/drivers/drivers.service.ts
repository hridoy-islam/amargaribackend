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

const createDriverIntoDB = async (files: any, payload: TDriver) => {
  try {
    const { name, phone, car, division, district, upazila } = payload;
    const { licenseFront, licenseBack, bluebookFront, bluebookBack } = files;
    const driverData = {
      name,
      phone,
      car,
      division,
      district,
      upazila,
      licenseFront: licenseFront[0].filename,
      licenseBack: licenseBack[0].filename,
      bluebookFront: bluebookFront[0].filename,
      bluebookBack: bluebookBack[0].filename,
    };
    const result = await Drivers.create(driverData);
    return result;
  } catch (error) {
    throw new Error("Something wrong");
  }
};

export const DriversServices = {
  createDriverIntoDB,
  updateDriverIntoDB,
  getSingleDriverFromDB,
  getAllDriversFromDB,
};
