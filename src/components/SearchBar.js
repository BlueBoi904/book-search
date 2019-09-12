import React from 'react'
import { Input } from 'antd';

const Search = Input.Search

export default function SearchBar() {

    return (
        <div>
            <Search
                placeholder="Find a book"
                enterButton="Search"
                size="large"
                // onChange={props.handleSearch}
                allowClear
                // onSearch={props.onSearch}
            />
        </div>
    );

}
