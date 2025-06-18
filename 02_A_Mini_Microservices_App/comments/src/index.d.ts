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

type CommentCreatedEvent = {
  type: 'CommentCreated';
  data: CommentCreatedData;
};


type CommentUpdatedEvent = {
  type: 'CommentCreated';
  data: CommentCreatedData;
};

export {
  CommentCreatedData,
  CommentCreatedEvent,
  CommentData,
  CreateCommentParams,
  CreateCommentRequest,
  GetCommentsParams,
  CommentUpdatedEvent,
};
