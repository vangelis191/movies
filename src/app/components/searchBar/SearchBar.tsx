import React from 'react'
import styled from "styled-components";
export const GlobalHeaderStyle = styled.div`
  .search-container {
      display: flex;
      align-items: center;
      position: relative;
    }

    .search-input {
      padding: 8px;
      border: 1px solid black;
      border-radius: 40px;
      background-color: black;
      color: white;
      height: 33px;
   
    }
    input{
      padding:20px!important;
    }
    .search-button {
      background-color: #424141;
      color: white;
      border: none;
      height: 33px;
      position: absolute;
      right: 2px;
      top: 50%;
      transform: translateY(-50%);
      font-size: 20px;
      padding:0 5px;
      border-radius: 100%;
      cursor: pointer;
    }

`;

const SearchBar = () => {
  return (
    <GlobalHeaderStyle>
    <div className="search-container">
        <input type="text" className="search-input" placeholder="Search..."></input>
        <button className="search-button material-symbols-outlined">Search</button>
    </div>
    </GlobalHeaderStyle>
  )
}

export default SearchBar