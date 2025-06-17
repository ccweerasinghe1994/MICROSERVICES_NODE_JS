import axios from 'axios';
import cors from 'cors';
import { randomBytes } from 'crypto';
import express, { Request, Response } from 'express';
import {
  CommentData,
  CreateCommentParams,
  CreateCommentRequest,
  GetCommentsParams,
} from './index.d.js';

const commentsByPostId: Record<string, CommentData[]> = {};

const app = express();
app.use(cors());
app.use(express.json());

const getCommentsHandler = (
  req: Request<GetCommentsParams>,
  res: Response<CommentData[]>
) => {
  const postId = req.params.id;
  const comments = commentsByPostId[postId] || [];
  res.json(comments);
};

app.get('/posts/:id/comments', getCommentsHandler);

const createCommentHandler = async (
  req: Request<CreateCommentParams, any, CreateCommentRequest>,
  res: Response
) => {
  const postId = req.params.id;
  const commentId = randomBytes(4).toString('hex');
  const comment = req.body;
  if (!commentsByPostId[postId]) {
    commentsByPostId[postId] = [];
  }
  const commentToBeCreated = {
    id: commentId,
    content: comment.content,
    status: 'pending',
  };
  commentsByPostId[postId].push(commentToBeCreated);
  await axios.post('http://localhost:4005/events', {
    type: 'CommentCreated',
    data: {
      ...commentToBeCreated,
      postId: postId,
    },
  });
  res.status(201).json({
    message: 'Comment created',
    comment: commentsByPostId[postId].find((c) => c.id === commentId),
  });
};

app.post('/posts/:id/comments', createCommentHandler);

app.post('/events', (req, res) => {
  const event = req.body;
  console.log('Received event:', event.type);
  res.send({});
});

app.listen(4001, () => {
  console.log('Comments service is running on port 4001');
});
