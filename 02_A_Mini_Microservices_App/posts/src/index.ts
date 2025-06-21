import axios from 'axios';
import cors from 'cors';
import express, { RequestHandler } from 'express';
import { randomBytes } from 'node:crypto';
const posts: Record<string, { id: string; title: string }> = {};

const app = express();
app.use(cors());
app.use(express.json());
const requestHandler: RequestHandler = (req, res) => {
  res.json(Object.values(posts));
};

app.get('/posts', requestHandler);

const createPostHandler: RequestHandler = async (req, res) => {
  const postId = randomBytes(4).toString('hex');
  const post = req.body;
  posts[postId] = { id: postId, title: post.title };

  axios
    .post('http://localhost:4005/events', {
      type: 'PostCreated',
      data: {
        id: postId,
        title: post.title,
      },
    })
    .catch((error) => {
      if (axios.isAxiosError(error)) {
        console.log(error.message);
      } else {
        console.log('error 📛📛📛📛');
      }
    });

  res.status(201).json({ message: 'Post created', post: posts[postId] });
};

app.post('/events', (req, res) => {
  const event = req.body;
  console.log('Received event:', event.type);
  res.send({});
});

app.post('/posts', createPostHandler);

app.listen(4000, () => {
  console.log('Posts service is running on port 4000');
});
