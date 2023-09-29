
import React from 'react';
import CommentItem from './CommentItem';

const CommentList = ({ comments }) => {
  return (
    <div>
      <h2>Comments</h2>
      {comments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default CommentList;
