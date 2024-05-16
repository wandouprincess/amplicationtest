import { UserSettings as TUserSettings } from "../api/userSettings/UserSettings";

export const USERSETTINGS_TITLE_FIELD = "userId";

export const UserSettingsTitle = (record: TUserSettings): string => {
  return record.userId?.toString() || String(record.id);
};
