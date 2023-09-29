
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
      <label htmlFor="">UserName:-</label>
      <input
        type="text"
        placeholder="User Name"
        value={user} className='username'
        onChange={(e) => setUser(e.target.value)}
      />
      <br />
      <label htmlFor="">Comment:-</label>
      <input type='text'
        placeholder="Your Comment"
        value={text} className='textarea'
        onChange={(e) => setText(e.target.value)}
      />
      <br />

      <button type="submit" className='submit'>Add Comment</button>
    </form>
  );
};

export default CommentForm;
