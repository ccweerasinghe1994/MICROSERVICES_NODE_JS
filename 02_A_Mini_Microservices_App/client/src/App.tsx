import { useEffect, useState } from 'react';
import { APIS, getMethod } from './api';
import CreatePost from './components/CreatePost';
import PostList from './components/PostList';

export type ResponseData = {
  id: string;
  title: string;
  comments?: {
    id: string;
    content: string;
    status: 'pending' | 'approved' | 'rejected';
  }[];
};

export type TPost = Record<string, ResponseData>;
export type TPostResponse = { post: TPost; message: string };
export default function App() {
  const [posts, setPosts] = useState<ResponseData[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      const { data, error, isError } = await getMethod<TPost>(
        '/posts',
        APIS.QUERY
      );
      console.log('Fetched posts:', data, error, isError);
      if (isError) {
        console.error('Error fetching posts:', error);
        setPosts([]);
      } else {
        if (data) {
          const items = Object.values(data);
          setPosts(items);
        }
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
