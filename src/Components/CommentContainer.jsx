import React from 'react'

const commentData = [
    {
        name : 'Ramakrishna',
        text : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, reprehenderit explicabo vitae',
        replies : [
            {
                name : 'Ramakrishna',
                text : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, reprehenderit explicabo vitae',
                replies : [
                    {
                        name : 'Ramakrishna',
                        text : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, reprehenderit explicabo vitae',
                        replies : [
                            {
                                name : 'Ramakrishna',
                                text : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, reprehenderit explicabo vitae',
                                replies : []
                            },
                            {
                                name : 'Ramakrishna',
                                text : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, reprehenderit explicabo vitae',
                                replies : []
                            },
                        ]
                    },
                    {
                        name : 'Ramakrishna',
                        text : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, reprehenderit explicabo vitae',
                        replies : [
                            {
                                name : 'Ramakrishna',
                                text : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, reprehenderit explicabo vitae',
                                replies : []
                            },
                            {
                                name : 'Ramakrishna',
                                text : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, reprehenderit explicabo vitae',
                                replies : []
                            },
                        ]
                    },
                    {
                        name : 'Ramakrishna',
                        text : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, reprehenderit explicabo vitae',
                        replies : [
                            {
                                name : 'Ramakrishna',
                                text : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, reprehenderit explicabo vitae',
                                replies : []
                            },
                            {
                                name : 'Ramakrishna',
                                text : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, reprehenderit explicabo vitae',
                                replies : []
                            },
                        ]
                    },
                    {
                        name : 'Ramakrishna',
                        text : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, reprehenderit explicabo vitae',
                        replies : [ 
                            {
                                name : 'Ramakrishna',
                                text : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, reprehenderit explicabo vitae',
                                replies : [
                                    {
                                        name : 'Ramakrishna',
                                        text : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, reprehenderit explicabo vitae',
                                        replies : []
                                    },
                                    {
                                        name : 'Ramakrishna',
                                        text : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, reprehenderit explicabo vitae',
                                        replies : []
                                    },
                                    {
                                        name : 'Ramakrishna',
                                        text : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, reprehenderit explicabo vitae',
                                        replies : []
                                    },
                                ]
                            },
                            {
                                name : 'Ramakrishna',
                                text : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, reprehenderit explicabo vitae',
                                replies : [
                                    {
                                        name : 'Ramakrishna',
                                        text : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, reprehenderit explicabo vitae',
                                        replies : []
                                    },
                                    {
                                        name : 'Ramakrishna',
                                        text : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, reprehenderit explicabo vitae',
                                        replies : []
                                    },
                                    {
                                        name : 'Ramakrishna',
                                        text : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, reprehenderit explicabo vitae',
                                        replies : [
                                            {
                                                name : 'Ramakrishna',
                                                text : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, reprehenderit explicabo vitae',
                                                replies : []
                                            },
                                            {
                                                name : 'Ramakrishna',
                                                text : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, reprehenderit explicabo vitae',
                                                replies : []
                                            },
                                            {
                                                name : 'Ramakrishna',
                                                text : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, reprehenderit explicabo vitae',
                                                replies : []
                                            },
                                        ]
                                    },
                                ]
                            },
                        ]
                    },
                ]
            },
            {
                name : 'Ramakrishna',
                text : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, reprehenderit explicabo vitae',
                replies : []
            },
            {
                name : 'Ramakrishna',
                text : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, reprehenderit explicabo vitae',
                replies : []
            },
            {
                name : 'Ramakrishna',
                text : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, reprehenderit explicabo vitae',
                replies : []
            },
        ]
    },
    {
        name : 'Ramakrishna',
        text : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, reprehenderit explicabo vitae',
        replies : [
            
        ]
    },
    {
        name : 'Ramakrishna',
        text : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, reprehenderit explicabo vitae',
        replies : [
            
        ]
    },
    {
        name : 'Ramakrishna',
        text : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus, reprehenderit explicabo vitae',
        replies : [
            
        ]
    }
]

const Comment = ({data}) => {
    const {name,text,replies} = data;
    return(
        <div className="flex bg-gray-200 rounded-lg p-2 m-2">
            <img alt="user" src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png" className="h-7 pt-2"/>
            <div>
                <p className="font-bold">{name}</p>
                <p>{text}</p>
            </div>
        </div>
    );
}

const CommentList = ({comments}) => {
    return comments.map((comment) => (
        <div>
            <Comment data={comment}/>
            <div className="pl-5 ml-5">
                <CommentList comments={comment.replies}/>
            </div>
        </div>
    ));
}

const CommentContainer = () => {
  return (
    <div className="mt-2 p-2 w-[52.5rem]">
        <h1 className="font-bold text-xl">Comments :</h1>
        <CommentList comments={commentData}/>
    </div>
  )
}

export default CommentContainer