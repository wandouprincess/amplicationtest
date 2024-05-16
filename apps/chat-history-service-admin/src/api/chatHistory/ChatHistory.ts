export type ChatHistory = {
  createdAt: Date;
  id: string;
  message: string | null;
  timestamp: Date | null;
  updatedAt: Date;
  userId: string | null;
};
