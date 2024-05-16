import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserSettingsServiceBase } from "./base/userSettings.service.base";

@Injectable()
export class UserSettingsService extends UserSettingsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
