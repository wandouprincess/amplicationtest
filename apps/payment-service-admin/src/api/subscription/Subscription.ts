export type Subscription = {
  createdAt: Date;
  endDate: Date | null;
  id: string;
  paymentType: string | null;
  startDate: Date | null;
  status?: "Option1" | null;
  subscriptionType: string | null;
  updatedAt: Date;
  userId: string | null;
};
