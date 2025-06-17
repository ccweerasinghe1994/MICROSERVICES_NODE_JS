import { useRef } from 'react';
import { APIS, postMethod } from '../api';
import type { TPost, TPostResponse } from '../App';

export default function CreatePost({
  setPosts,
}: {
  setPosts: React.Dispatch<React.SetStateAction<TPost[]>>;
}) {
  const titleRef = useRef<HTMLInputElement>(null);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const title = formData.get('title') as string;

    if (!title) {
      alert('Title is required');
      return;
    }

    const { data, error, isError } = await postMethod<TPostResponse>(
      '/posts',
      APIS.POST,
      {
        title,
      }
    );

    if (!isError && data) {
      console.log('Post created:', data.post);
      setPosts((prevPosts) => [data.post, ...prevPosts]);
      // Reset the form after successful submission
      if (titleRef.current) {
        titleRef.current.value = '';
        titleRef.current.focus();
      }
    }

    if (isError) {
      alert(error?.message || 'An error occurred');
      return;
    }
  };
  return (
    <>
      <h1 className="text-4xl font-bold mb-2 px-2 py-4">Create Post</h1>
      <form
        onSubmit={handleSubmit}
        className="border-gray-200 border-1 shadow-sm rounded-sm p-4 flex flex-col gap-4 w-1/3"
      >
        <label htmlFor="title">Title</label>
        <input
          ref={titleRef}
          required
          placeholder="Enter post title"
          autoFocus
          autoComplete="on"
          className="border-gray-200 border-1 shadow-sm py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          id="title"
          name="title"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-1 rounded-sm w-fit px-4"
        >
          Create
        </button>
      </form>
    </>
  );
}
