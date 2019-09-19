import React from 'react';
import { Input } from 'antd';


const { Search } = Input;

const SearchBar = (props) => {
  const { handleChange, handleSearch } = props;

  return (
    <div className="searchbar-div">
      <Search
        placeholder="Find a book"
        enterButton="Search"
        size="default"
        onChange={handleChange}
        allowClear
        onSearch={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
