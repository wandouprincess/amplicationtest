import * as graphql from "@nestjs/graphql";
import { UserSettingsResolverBase } from "./base/userSettings.resolver.base";
import { UserSettings } from "./base/UserSettings";
import { UserSettingsService } from "./userSettings.service";

@graphql.Resolver(() => UserSettings)
export class UserSettingsResolver extends UserSettingsResolverBase {
  constructor(protected readonly service: UserSettingsService) {
    super(service);
  }
}
