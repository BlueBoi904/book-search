import React, { useState } from 'react';
import axios from 'axios';
import 'antd/dist/antd.css';
import { Spin, Alert } from 'antd';

import BookList from './BookList';
import SearchBar from './SearchBar';

const Books = () => {
  const [searchField, setSearchField] = useState('');
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const URL = 'https://www.googleapis.com/books/v1/volumes?q=';
  const KEY = process.env.REACT_APP_API_KEY;

  const onClose = (e) => {
    setError(false);
  };

  const handleSearch = async () => {
    setBooks([]);
    setLoading(true);
    try {
      setError(false);
      if (searchField === '') {
        setLoading(false);
        const errorMessage = { message: 'You must enter a search value' };
        throw errorMessage;
      }

      const response = await axios.get(
        `${URL}${searchField}&maxResults=16&key=${KEY}`,

      );
      console.log(response);
      if (!response.data.items) {
        setLoading(false);
        const errorMessage = { message: 'There are no results for your search' };
        throw errorMessage;
      }
      setLoading(false);
      setBooks(response.data.items);
    } catch (err) {
      setLoading(false);
      setError(true);
      setErrorMessage(err.message);
    }
  };

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };
  return (

    <div>
      <SearchBar className="searchbar-div" handleChange={handleChange} handleSearch={handleSearch} />
      {loading && (
      <div className="spinner books">
        <Spin />
      </div>
      )}
      {error ? (
        <div className="error">
          <Alert
            message="An error has occured"
            description={errorMessage}
            type="error"
            closable
            onClose={onClose}
          />
        </div>
      ) : (
        <BookList books={books} />
      )}
    </div>
  );
};

export default Books;
