import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ChatHistoryServiceBase } from "./base/chatHistory.service.base";

@Injectable()
export class ChatHistoryService extends ChatHistoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
