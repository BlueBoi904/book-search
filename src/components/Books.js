import React, { useState } from 'react';
import axios from 'axios';
import 'antd/dist/antd.css';
import { Spin } from 'antd';
import { Alert } from "antd";
import BookList from './BookList';
import SearchBar from './SearchBar';

const Books = () => {
  const [searchField, setSearchField] = useState('');
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('')

  const URL = 'https://www.googleapis.com/books/v1/volumes?q=';
  const KEY = process.env.REACT_APP_API_KEY;

  const onClose = e => {
   setError(false);
  };

  const handleSearch = async () => {

    try {
      setError(false);
      if (searchField === '') {
        let errorMessage =  { message : 'You must enter a search value' };
        throw errorMessage;
      }
      setLoading(true);
      const response = await axios.get(
        `${URL}${searchField}&maxResults=20&key=${KEY}`,
      );
      if (!response.data.items){
        setLoading(false)
        let errorMessage =  { message : 'There are no results for your search' };
        throw errorMessage;
      }
      setLoading(false);
      setBooks(response.data.items);
    } catch (err) {
      setError(true);
      setErrorMessage(err.message);
    }
  };

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  const handleRender = () => {
      if (loading){
      return <div className="spinner">
       <Spin />
      </div>
    } else if (error) {
      return <div>
        <Alert 
      message='An error has occured'
      description={errorMessage}
      type="error"
      closable
      onClose={onClose}/>
      </div>
    } else {
      return <BookList books={books} />
    }
  }
  return (
    <div className="books">
      <SearchBar handleChange={handleChange} handleSearch={handleSearch} />
        {handleRender()}
    </div>
  );
};

export default Books;

// {loading ? (
//   <div className="spinner">
//     <Spin />
//   </div>
// ) : (
//   <BookList books={books} />
// )}