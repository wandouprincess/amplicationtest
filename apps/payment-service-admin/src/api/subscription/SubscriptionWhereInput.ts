import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type SubscriptionWhereInput = {
  endDate?: DateTimeNullableFilter;
  id?: StringFilter;
  paymentType?: StringNullableFilter;
  startDate?: DateTimeNullableFilter;
  status?: "Option1";
  subscriptionType?: StringNullableFilter;
  userId?: StringNullableFilter;
};
