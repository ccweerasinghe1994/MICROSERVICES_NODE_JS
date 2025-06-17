import type { ResponseData } from '../App';
import PostItem from './PostItem';

export default function PostList({ posts }: { posts: ResponseData[] }) {
  console.log('🚀 ~ PostList ~ posts:', posts);
  if (!posts || posts.length === 0) {
    return (
      <div className="text-center text-gray-500 mt-4">No posts available</div>
    );
  }

  return (
    <>
      <h2 className="text-2xl font-bold mb-2 px-2 py-4">Posts</h2>
      <ul className="flex gap-4">
        {posts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </ul>
    </>
  );
}
