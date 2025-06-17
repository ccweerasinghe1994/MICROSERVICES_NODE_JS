
enum EVENT_TYPE  {
    POST_CREATED = "PostCreated",
    COMMENT_CREATED = "CommentCreated"
}

type TPost = {
    id:string
    title:string
}

type TComment = {
    id:string
    content:string
}

type TPostObject = TPost & {
    comments?:TComment[]
}

type TPosts = Record<string,TPostObject>

type TPostCreated = {
    type:EVENT_TYPE.POST_CREATED,
    data:TPost
}


type TCommentCreated = {
    type:EVENT_TYPE.COMMENT_CREATED,
    data:TComment & {postId:string}
}


export { EVENT_TYPE, TCommentCreated, TPostCreated, TPosts }

