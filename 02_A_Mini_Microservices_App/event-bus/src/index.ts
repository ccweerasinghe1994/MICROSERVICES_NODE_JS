import axios from 'axios';
import cors from 'cors';
import express from 'express';
const app = express();
app.use(express.json());
app.use(cors());
interface Event {
  type: string;
  data: any;
}

const events: Event[] = [];
app.post('/events', (req, res) => {
  const event = req.body;
  events.push(event);
  axios.post('http://localhost:4000/events', event).catch((error) => {
    console.log('error happened in post service');
  });
  axios.post('http://localhost:4001/events', event).catch((error) => {
    console.log('error happened in comment service');
  });
  axios.post('http://localhost:4002/events', event).catch((error) => {
    console.log('error happened in query service');
  });
  axios.post('http://localhost:4003/events', event).catch((error) => {
    console.log('error happened in moderation service');
  });
  res.send({ status: 'OK' });
});

app.get('/events', (req, res) => {
  res.send(events);
});

app.listen(4005, () => {
  console.log('Event bus is running on port 4005');
});
