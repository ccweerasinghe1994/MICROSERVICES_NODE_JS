import axios from 'axios';
import cors from 'cors';
import express from 'express';
import {
  CommentUpdatedEvent,
  EVENT_TYPE,
  TCommentCreated,
  TPostCreated,
  TPosts,
} from './types';
const app = express();
app.use(express.json());
app.use(cors());

const posts: TPosts = {};

app.post('/events', (req, res) => {
  const event = req.body as
    | TPostCreated
    | TCommentCreated
    | CommentUpdatedEvent;

  handleEvent(event);

  res.send({ status: 'OK' });
});

app.get('/posts', (req, res) => {
  res.send(posts);
});

app.listen(4002, async () => {
  console.log('Event bus is running on port 4002');
  const events = await axios.get('http://localhost:4005/events');

  for (const event of events.data) {
    console.log('🚀 ~ app.listen ~ event:', event);
    handleEvent(event);
  }
});

function handleEvent(
  event: TPostCreated | TCommentCreated | CommentUpdatedEvent
) {
  if (event.type === EVENT_TYPE.POST_CREATED) {
    const {
      data: { id, title },
    } = event;
    posts[id] = { id, title, comments: [] };
  }

  if (event.type === EVENT_TYPE.COMMENT_CREATED) {
    const {
      data: { id, content, postId, status },
    } = event;
    posts[postId].comments?.push({ id, content, status });
  }

  if (event.type === EVENT_TYPE.COMMENT_UPDATED) {
    const {
      data: { content, id, postId, status },
    } = event;
    const commentToUpdate = posts[postId].comments?.find(
      (comment) => comment.id === id
    );
    if (commentToUpdate) {
      commentToUpdate.status = status;
      commentToUpdate.content = content;
    }
  }
}
