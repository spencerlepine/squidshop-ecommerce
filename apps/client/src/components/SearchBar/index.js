import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "material-ui-search-bar";

// should send query as parameter to catalog page
const CustomSearchBar = ({ customStyles }) => {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  const handleSubmit = () => {
    const search = query;
    setQuery('')
    navigate(`/catalog?query=${search}`)
  }

  return (
    <SearchBar
      style={customStyles || { width: '40%', margin: '0 auto', float: 'right' }}
      value={query}
      onChange={(newValue) => setQuery(newValue)}
      onRequestSearch={handleSubmit}
    />
  )
}

export default CustomSearchBar
