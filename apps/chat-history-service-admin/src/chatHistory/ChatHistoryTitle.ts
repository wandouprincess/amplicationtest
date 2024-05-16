import { ChatHistory as TChatHistory } from "../api/chatHistory/ChatHistory";

export const CHATHISTORY_TITLE_FIELD = "userId";

export const ChatHistoryTitle = (record: TChatHistory): string => {
  return record.userId?.toString() || String(record.id);
};
