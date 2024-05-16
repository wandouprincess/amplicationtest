import { SortOrder } from "../../util/SortOrder";

export type ReferralOrderByInput = {
  createdAt?: SortOrder;
  creditEarned?: SortOrder;
  id?: SortOrder;
  referralCode?: SortOrder;
  referralDate?: SortOrder;
  referredUserId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
