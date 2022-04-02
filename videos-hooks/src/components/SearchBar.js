import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
  const [search, setSearch] = useState('');

  const onSubmit = event => {
    event.preventDefault();

    onFormSubmit(search);
  }

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <div className="ui fluid huge icon input">
          <label>Video Search</label>
          <input
            id="video-search"
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(event) => {setSearch(event.target.value)}}
          />
          <i className="search icon"></i>
        </div>
      </form>
    </div>
  )
};

export default SearchBar;
