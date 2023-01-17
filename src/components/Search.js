import React, {useState} from "react";

function Search({text, setSearchText}) {

  const handleChange = (e) => {
    setSearchText(e.target.value)
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input
          onChange={handleChange}
          value={text} 
          className="prompt" 
        />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
