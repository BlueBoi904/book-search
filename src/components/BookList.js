import React from 'react';
import BookCard from './BookCard';



const BookList = ({books}) => {
    const book = books.map(book => {

         return <a key={book.id} href={book.volumeInfo.canonicalVolumeLink}> <BookCard book={book}/></a>
        })
    return (
        <div className='book-list'>
            {book}
        </div>
    )
}

export default BookList;
