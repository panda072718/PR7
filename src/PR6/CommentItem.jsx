import React from 'react';
import './style.css'

const CommentItem = ({ comment }) => {
    return (
        <div className="comment">
            <div className="user">{comment.user}</div>
            <div className="text">{comment.text}</div>
            <div className="datetime">{comment.dateTime}</div>
        </div>
    );
};

export default CommentItem;
