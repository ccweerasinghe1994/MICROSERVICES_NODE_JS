import cors from 'cors';
import express from 'express';
import { EVENT_TYPE, TCommentCreated, TPostCreated, TPosts } from './types';
const app = express();
app.use(express.json());
app.use(cors())

const posts:TPosts = {}

app.post('/events', (req, res) => {
    const event = req.body as TPostCreated | TCommentCreated;
    if (event.type === EVENT_TYPE.POST_CREATED) {
        const {data:{id,title}} = event;
        posts[id] = {id,title,comments:[]};
    }

    if (event.type === EVENT_TYPE.COMMENT_CREATED) {
        const {data:{id,content,postId}} = event;
        posts[postId].comments?.push({id,content})
    }
    res.send({ status: 'OK' });
});

app.get('/posts',(req,res)=>{
    res.send('Hello from event bus');
})

app.listen(4002, () => {
    console.log('Event bus is running on port 4002');
});