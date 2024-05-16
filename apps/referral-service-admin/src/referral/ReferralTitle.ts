import { Referral as TReferral } from "../api/referral/Referral";

export const REFERRAL_TITLE_FIELD = "referralCode";

export const ReferralTitle = (record: TReferral): string => {
  return record.referralCode?.toString() || String(record.id);
};
