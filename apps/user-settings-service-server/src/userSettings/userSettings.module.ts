import { Module } from "@nestjs/common";
import { UserSettingsModuleBase } from "./base/userSettings.module.base";
import { UserSettingsService } from "./userSettings.service";
import { UserSettingsController } from "./userSettings.controller";
import { UserSettingsResolver } from "./userSettings.resolver";

@Module({
  imports: [UserSettingsModuleBase],
  controllers: [UserSettingsController],
  providers: [UserSettingsService, UserSettingsResolver],
  exports: [UserSettingsService],
})
export class UserSettingsModule {}
