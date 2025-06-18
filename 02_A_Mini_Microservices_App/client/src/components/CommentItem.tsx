export default function CommentItem({
  comment,
}: {
  comment: {
    id: string;
    content: string;
    status: 'pending' | 'approved' | 'rejected';
  };
}) {
  let content = comment.content;

  if (comment.status === 'pending') {
    content = 'This comment is awaiting moderation';
  } else if (comment.status === 'rejected') {
    content = 'This comment has been rejected';
  }

  return (
    <li
      className="border-b border-gray-200 py-2 pl-4 text-gray-700 italic hover:bg-gray-100 transition-colors "
      key={comment.id}
    >
      <span className="inline-block w-2 h-2 bg-gray-400 rounded-full mr-2"></span>
      {content}
    </li>
  );
}
