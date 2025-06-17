type CommentCreatedData = {
  id: string;
  postId: string;
  content: string;
  status: string;
};

type CommentCreatedEvent = {
  type: 'CommentCreated';
  data: CommentCreatedData;
};

export type { CommentCreatedData, CommentCreatedEvent };
