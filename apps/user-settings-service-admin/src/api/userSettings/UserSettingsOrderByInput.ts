import { SortOrder } from "../../util/SortOrder";

export type UserSettingsOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  kidsAge?: SortOrder;
  kidsInterests?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
