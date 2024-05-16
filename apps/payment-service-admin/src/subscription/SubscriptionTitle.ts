import { Subscription as TSubscription } from "../api/subscription/Subscription";

export const SUBSCRIPTION_TITLE_FIELD = "paymentType";

export const SubscriptionTitle = (record: TSubscription): string => {
  return record.paymentType?.toString() || String(record.id);
};
