import axios from 'axios';
import cors from 'cors';
import express from 'express';
import type { CommentCreatedData, CommentCreatedEvent } from './types';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/events', async (req, res) => {
  const event = req.body as CommentCreatedEvent;

  if (event.type === 'CommentCreated') {
    const status = event.data.content.includes('orange')
      ? 'rejected'
      : 'approved';
    const moderatedComment: CommentCreatedData = {
      ...event.data,
      status,
    };

    const moderatedCommentEvent = {
      type: 'CommentModerated',
      data: moderatedComment,
    };

    await axios.post('http://localhost:4005/events', moderatedCommentEvent);
  }

  res.send({});
});

app.listen(4003, () => {
  console.log('Posts service is running on port 4003');
});
