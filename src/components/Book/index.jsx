import React from 'react';

import './Book.css';

const Book = ({ data }) => (
  <div className="Book-container">
    <p>{data.name}</p>
    <p>{data.author}</p>
    <p>{data.rating}</p>
  </div>
);

export default Book;

