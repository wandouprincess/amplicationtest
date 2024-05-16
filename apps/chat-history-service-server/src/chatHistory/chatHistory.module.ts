import { Module } from "@nestjs/common";
import { ChatHistoryModuleBase } from "./base/chatHistory.module.base";
import { ChatHistoryService } from "./chatHistory.service";
import { ChatHistoryController } from "./chatHistory.controller";
import { ChatHistoryResolver } from "./chatHistory.resolver";

@Module({
  imports: [ChatHistoryModuleBase],
  controllers: [ChatHistoryController],
  providers: [ChatHistoryService, ChatHistoryResolver],
  exports: [ChatHistoryService],
})
export class ChatHistoryModule {}
