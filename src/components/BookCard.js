import React from 'react';

const BookCard = ({ book, showModal }) => (
  <div
    tabIndex={0}
    role="button"
    className="book-card"
    onClick={() => showModal(book)}
    onKeyDown={() => showModal(book)}
  >
    {book.volumeInfo.title ? <p>{book.volumeInfo.title}</p> : null}
    {book.volumeInfo.imageLinks ? (
      <img
        alt={book.volumeInfo.title}
        src={book.volumeInfo.imageLinks.smallThumbnail}
      />
    ) : null}
  </div>
);

export default BookCard;
