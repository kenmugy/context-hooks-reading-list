import React, { useState, useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const BookForm = () => {
  const { dispatch } = useContext(BookContext);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (title && author) {
      dispatch({
        type: 'ADD_BOOK',
        book: {
          title,
          author
        }
      });
      setTitle('');
      setAuthor('');
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className='form-field'>
        <input
          type='text'
          placeholder='Enter Title'
          value={title}
          onChange={e => setTitle(e.currentTarget.value)}
        />
      </div>
      <div className='form-field'>
        <input
          type='text'
          placeholder='Enter Author'
          value={author}
          onChange={e => setAuthor(e.currentTarget.value)}
        />
      </div>
      <button>Add Book</button>
    </form>
  );
};

export default BookForm;
