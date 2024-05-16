import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UserSettingsService } from "./userSettings.service";
import { UserSettingsControllerBase } from "./base/userSettings.controller.base";

@swagger.ApiTags("userSettings")
@common.Controller("userSettings")
export class UserSettingsController extends UserSettingsControllerBase {
  constructor(protected readonly service: UserSettingsService) {
    super(service);
  }
}
