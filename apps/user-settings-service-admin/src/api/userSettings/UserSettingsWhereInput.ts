import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type UserSettingsWhereInput = {
  id?: StringFilter;
  kidsAge?: IntNullableFilter;
  kidsInterests?: StringNullableFilter;
  userId?: StringNullableFilter;
};
