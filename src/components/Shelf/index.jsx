import React from 'react';
import Book from '../Book';
import BookContainer from '../BookContainer';

import './Shelf.css';

const Shelf = ({ data, text }) => {
  const books = data.map(book => <Book data={book} />);
  return (
    <div className="Shelf-container">
      <div className="Shelf-title">{text}</div>
      <div className="Book-container">
        {books}
      </div>
    </div>
  );
};
export default Shelf;

