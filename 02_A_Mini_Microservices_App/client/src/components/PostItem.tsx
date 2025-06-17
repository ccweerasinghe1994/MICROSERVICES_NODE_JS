import type { TPost } from '../App';
import CommentList from './CommnetList';

export default function PostItem({ post }: { post: TPost }) {
  const postId = post.id;

  return (
    <li className="border-1  border-gray-200 py-4 px-2 mb-2 rounded-sm shadow-sm font-semibold text-gray-700 hover:bg-gray-100 transition-colors">
      <h3 className="text-lg font-bold">{post.title}</h3>
      <CommentList postId={postId} />
    </li>
  );
}
