import React, { useState } from 'react';
import BookList from './BookList';
import SearchBar from './SearchBar';
import axios from 'axios';

const Books = () => {
    const [searchField , setSearchField] = useState('');
    const [books, setBooks] = useState ([]);
    const [loading, setLoading] = useState (false);

    const URL = 'https://www.googleapis.com/books/v1/volumes?q='
    const KEY = process.env.REACT_APP_API_KEY;

    const handleSearch = async () => {
        setLoading(true);
        try {
            const response = await axios.get(`${URL}${searchField}&maxResults=20&key=${KEY}`);
            setBooks(response.data.items)
        } catch(err) {
            console.log(err);
        }
    }

    const handleChange = e => {
        setSearchField(e.target.value);
    }
    return (
        <div className='books'>
            <SearchBar handleChange={handleChange} handleSearch={handleSearch}/>
            <BookList books={books} />
        </div>
    )
}

export default Books;