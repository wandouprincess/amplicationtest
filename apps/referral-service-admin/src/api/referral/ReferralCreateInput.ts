export type ReferralCreateInput = {
  creditEarned?: number | null;
  referralCode?: string | null;
  referralDate?: Date | null;
  referredUserId?: string | null;
  userId?: string | null;
};
