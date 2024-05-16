import { SortOrder } from "../../util/SortOrder";

export type SubscriptionOrderByInput = {
  createdAt?: SortOrder;
  endDate?: SortOrder;
  id?: SortOrder;
  paymentType?: SortOrder;
  startDate?: SortOrder;
  status?: SortOrder;
  subscriptionType?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
