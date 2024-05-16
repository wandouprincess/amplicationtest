import { ChatHistoryWhereInput } from "./ChatHistoryWhereInput";
import { ChatHistoryOrderByInput } from "./ChatHistoryOrderByInput";

export type ChatHistoryFindManyArgs = {
  where?: ChatHistoryWhereInput;
  orderBy?: Array<ChatHistoryOrderByInput>;
  skip?: number;
  take?: number;
};
