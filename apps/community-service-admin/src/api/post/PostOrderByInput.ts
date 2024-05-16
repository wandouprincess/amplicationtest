import { SortOrder } from "../../util/SortOrder";

export type PostOrderByInput = {
  authorId?: SortOrder;
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  postContent?: SortOrder;
  publishedAt?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
