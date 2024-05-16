import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type PostWhereInput = {
  authorId?: StringNullableFilter;
  content?: StringNullableFilter;
  id?: StringFilter;
  postContent?: StringNullableFilter;
  publishedAt?: DateTimeNullableFilter;
  userId?: StringNullableFilter;
};
