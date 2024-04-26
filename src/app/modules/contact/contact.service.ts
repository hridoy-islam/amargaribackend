import QueryBuilder from "../../builder/QueryBuilder";
import { contactSearchableFields } from "./contact.constant";
import { TContact } from "./contact.interface";
import { Contact } from "./contact.model";

const getAllContactFromDB = async (query: Record<string, unknown>) => {
  const contactQuery = new QueryBuilder(Contact.find(), query)
    .search(contactSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();

  const meta = await contactQuery.countTotal();
  const result = await contactQuery.modelQuery;

  return {
    meta,
    result,
  };
};

const getSingleContactFromDB = async (id: string) => {
  const result = await Contact.findById(id);
  return result;
};

const createContactIntoDB = async (payload: TContact) => {
  const result = await Contact.create(payload);
  return result;
};

export const ContactServices = {
  getAllContactFromDB,
  getSingleContactFromDB,
  createContactIntoDB,
};
