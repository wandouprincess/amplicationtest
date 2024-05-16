import { Post as TPost } from "../api/post/Post";

export const POST_TITLE_FIELD = "authorId";

export const PostTitle = (record: TPost): string => {
  return record.authorId?.toString() || String(record.id);
};
