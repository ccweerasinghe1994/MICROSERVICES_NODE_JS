import { useState, type Dispatch, type SetStateAction } from 'react';
import { APIS, postMethod } from '../api';
import type { CommentData } from './CommnetList';

export default function CommentCreate({
  postId,
  setComments,
}: {
  postId: string;
  setComments: Dispatch<SetStateAction<CommentData[]>>;
}) {
  const [content, setContent] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!content.trim()) {
      alert('Comment cannot be empty');
      return;
    }
    // Handle comment submission logic here
    console.log('Comment submitted:', content);
    const { data, error, isError } = await postMethod<{
      message: string;
      comment: CommentData;
    }>(`/posts/${postId}/comments`, APIS.COMMENT, {
      content,
    });
    console.log('🚀 ~ handleSubmit ~ data:', data);
    if (isError) {
      alert(error?.message || 'An error occurred while submitting the comment');
      return;
    }
    if (data) {
      // Update the comments state with the newly created comment
      setComments((prevComments) => [data?.comment, ...prevComments]);
      setContent('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Add a comment..."
        className="border border-gray-300 p-2 rounded-md w-full"
      />
      <button
        type="submit"
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Submit
      </button>
    </form>
  );
}
