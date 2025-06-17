import cors from 'cors';
import { randomBytes } from 'crypto';
import express, { Request, Response } from 'express';
import { CommentData, CreateCommentParams, CreateCommentRequest, GetCommentsParams } from './index.d.js';

const commentsByPostId: Record<string, CommentData[]> = {};

const app = express();
app.use(cors());
app.use(express.json()); 

const getCommentsHandler = (req: Request<GetCommentsParams>, res: Response<CommentData[]>) => {
    const postId = req.params.id;
    const comments = commentsByPostId[postId] || [];
    res.json(comments);
};


app.get("/posts/:id/comments", getCommentsHandler);

const createCommentHandler = (req: Request<CreateCommentParams, any, CreateCommentRequest>, res: Response) => {
    const postId = req.params.id;
    const commentId = randomBytes(4).toString('hex');
    const comment = req.body;
    if (!commentsByPostId[postId]) {
        commentsByPostId[postId] = [];
    }
    commentsByPostId[postId].push({ id: commentId, content: comment.content });
    res.status(201).json({ message: "Comment created", comment: commentsByPostId[postId].find(c => c.id === commentId) });
}

app.post("/posts/:id/comments", createCommentHandler);

app.listen(4001, () => {
    console.log("Comments service is running on port 4001");
})