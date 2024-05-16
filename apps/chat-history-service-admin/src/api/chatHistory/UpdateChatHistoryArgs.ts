import { ChatHistoryWhereUniqueInput } from "./ChatHistoryWhereUniqueInput";
import { ChatHistoryUpdateInput } from "./ChatHistoryUpdateInput";

export type UpdateChatHistoryArgs = {
  where: ChatHistoryWhereUniqueInput;
  data: ChatHistoryUpdateInput;
};
