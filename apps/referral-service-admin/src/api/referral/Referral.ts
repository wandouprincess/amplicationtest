export type Referral = {
  createdAt: Date;
  creditEarned: number | null;
  id: string;
  referralCode: string | null;
  referralDate: Date | null;
  referredUserId: string | null;
  updatedAt: Date;
  userId: string | null;
};
