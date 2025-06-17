import cors from 'cors';
import express from 'express';
const posts: Record<string, { id: string; title: string }> = {};

const app = express();
app.use(cors());
app.use(express.json());

app.post('/events', (req, res) => {
  const event = req.body;
  console.log('Received event:', event.type);
  res.send({});
});

app.listen(4003, () => {
  console.log('Posts service is running on port 4003');
});
