type TCommentStatus = 'approved' | 'rejected' | 'pending';
interface CommentData {
  id: string;
  content: string;
  status: TCommentStatus;
}

interface CreateCommentRequest {
  content: string;
}

interface GetCommentsParams {
  id: string;
}

interface CreateCommentParams {
  id: string;
}
type CommentCreatedData = {
  id: string;
  postId: string;
  content: string;
  status: TCommentStatus;
};

type CommentModeratedEvent = {
  type: 'CommentModerated';
  data: CommentCreatedData;
};

type CommentUpdatedEvent = {
  type: 'CommentUpdated';
  data: CommentCreatedData;
};

export {
  CommentCreatedData,
  CommentData,
  CommentModeratedEvent,
  CommentUpdatedEvent,
  CreateCommentParams,
  CreateCommentRequest,
  GetCommentsParams,
};
