import { UserSettingsWhereInput } from "./UserSettingsWhereInput";
import { UserSettingsOrderByInput } from "./UserSettingsOrderByInput";

export type UserSettingsFindManyArgs = {
  where?: UserSettingsWhereInput;
  orderBy?: Array<UserSettingsOrderByInput>;
  skip?: number;
  take?: number;
};
