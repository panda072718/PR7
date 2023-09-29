
import React, { useState } from 'react';

const CommentForm = ({ addComment }) => {
  const [user, setUser] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const dateTime = new Date().toLocaleString();
    addComment({ user, text, dateTime });
    setUser('');
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="User Name"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <textarea
        placeholder="Your Comment"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add Comment</button>
    </form>
  );
};

export default CommentForm;
