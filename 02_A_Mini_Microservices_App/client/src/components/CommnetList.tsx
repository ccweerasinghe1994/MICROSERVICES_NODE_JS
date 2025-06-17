import { useEffect, useState } from 'react';
import { APIS, getMethod } from '../api';
import CommentCreate from './CommentCreate';

export interface CommentData {
  id: string;
  content: string;
}

export default function CommentList({ postId }: { postId: string }) {
  const [comments, setComments] = useState<CommentData[]>([]);
  useEffect(() => {
    async function fetchComments() {
      // Fetch comments for the post with the given postId
      const { data, error, isError } = await getMethod<CommentData[]>(
        `/posts/${postId}/comments`,
        APIS.COMMENT
      );
      if (isError) {
        console.error('Error fetching comments:', error);
      } else {
        console.log('Fetched comments:', data);
        setComments(data!);
      }
    }

    fetchComments();
  }, [postId]);
  return (
    <div>
      {comments.length > 0 && <h4>{comments.length} comments</h4>}
      <CommentCreate setComments={setComments} postId={postId} />
      <ul className="w-full h-48 overflow-y-auto">
        {comments.map((comment) => (
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
