import { useState } from 'react';
import type { ResponseData } from '../App';
import CommentCreate from './CommentCreate';

export interface CommentData {
  id: string;
  content: string;
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
          <li
            className="border-b border-gray-200 py-2 pl-4 text-gray-700 italic hover:bg-gray-100 transition-colors "
            key={comment.id}
          >
            <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mr-2"></span>
            {comment.content}
          </li>
        ))}
      </ul>
    </div>
  );
}
