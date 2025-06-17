import express, { RequestHandler } from 'express';
import { randomBytes } from 'node:crypto';

const posts:Record<string, { id: string, title: string }> = {}

const app = express();
app.use(express.json());
const requestHandler:RequestHandler = (req, res) => {
    res.json(Object.values(posts));
}

app.get("/posts", requestHandler);


const createPostHandler:RequestHandler = (req, res) => {
    const postId = randomBytes(4).toString('hex');
    const post = req.body;
    posts[postId] = { id: postId, title: post.title };
    res.status(201).json({ message: "Post created", post: posts[postId] });
}

app.post("/posts", createPostHandler);

app.listen(4000, () => {
    console.log("Posts service is running on port 4000");
});


