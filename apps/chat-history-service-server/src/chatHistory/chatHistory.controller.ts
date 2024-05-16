import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ChatHistoryService } from "./chatHistory.service";
import { ChatHistoryControllerBase } from "./base/chatHistory.controller.base";

@swagger.ApiTags("chatHistories")
@common.Controller("chatHistories")
export class ChatHistoryController extends ChatHistoryControllerBase {
  constructor(protected readonly service: ChatHistoryService) {
    super(service);
  }
}
