import * as graphql from "@nestjs/graphql";
import { ChatHistoryResolverBase } from "./base/chatHistory.resolver.base";
import { ChatHistory } from "./base/ChatHistory";
import { ChatHistoryService } from "./chatHistory.service";

@graphql.Resolver(() => ChatHistory)
export class ChatHistoryResolver extends ChatHistoryResolverBase {
  constructor(protected readonly service: ChatHistoryService) {
    super(service);
  }
}
