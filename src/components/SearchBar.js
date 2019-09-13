import React from 'react'
import "antd/dist/antd.css";
import { Input } from "antd";

const { Search } = Input;

export default function SearchBar() {

    return (
        <div>
    <Search
      placeholder="Search for books"
      enterButton="Search"
      size="default"
      style={{ width: 250,
            justifyContent: 'center'
    }}
    //   onSearch={handleSearch}
    />
  </div>
    );

}
