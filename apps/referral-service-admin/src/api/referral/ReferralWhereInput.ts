import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type ReferralWhereInput = {
  creditEarned?: IntNullableFilter;
  id?: StringFilter;
  referralCode?: StringNullableFilter;
  referralDate?: DateTimeNullableFilter;
  referredUserId?: StringNullableFilter;
  userId?: StringNullableFilter;
};
