import React from 'react';

const SearchBar = ({ onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Tìm kiếm truyện..."
      className="search-bar"
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};

export default SearchBar; // Đảm bảo có dòng này