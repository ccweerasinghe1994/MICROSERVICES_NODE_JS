import { useState } from 'react';
import type { ResponseData } from '../App';
import CommentCreate from './CommentCreate';
import CommentItem from './CommentItem';

export interface CommentData {
  id: string;
  content: string;
  status: 'pending' | 'approved' | 'rejected';
}

export default function CommentList({ post }: { post: ResponseData }) {
  const [comments, setComments] = useState<CommentData[]>([]);

  const commentsFromPost = post.comments || [];

  return (
    <div>
      {commentsFromPost.length > 0 && (
        <h4>{commentsFromPost.length} comments</h4>
      )}
      <CommentCreate setComments={setComments} postId={post.id} />
      <ul className="w-full h-48 overflow-y-auto">
        {commentsFromPost.map((comment) => (
          <CommentItem comment={comment} key={comment.id} />
        ))}
      </ul>
    </div>
  );
}
