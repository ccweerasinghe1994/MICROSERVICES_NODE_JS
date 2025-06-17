import { useEffect, useState } from 'react';
import { APIS, getMethod } from './api';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';

export type TPost = { id: string; title: string };
export type TPostResponse = { post: TPost; message: string };
export default function App() {
  const [posts, setPosts] = useState<TPost[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      const { data, error, isError } = await getMethod<TPost[]>(
        '/posts',
        APIS.POST
      );
      if (isError) {
        console.error('Error fetching posts:', error);
        setPosts([]);
      } else {
        console.log('Fetched posts:', data);
        setPosts(data!);
      }
    }
    fetchPosts();
  }, []);

  return (
    <div className="ml-10 h-dvh">
      <CreatePost setPosts={setPosts} />

      <PostList posts={posts} />
    </div>
  );
}
