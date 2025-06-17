export interface CommentData {
    id: string;
    content: string;
}

export interface CreateCommentRequest {
    content: string;
}

export interface GetCommentsParams {
    id: string;
}

export interface CreateCommentParams {
    id: string;
}
