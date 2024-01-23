import React from "react";
import SearchBar from "../searchBar/SearchBar";
import styled from "styled-components";
import Image from 'next/image';
import icon from '../../../assets/naruto.jpeg';
export const GlobalHeaderStyle = styled.div`
  .flex-wrapper {
    display: flex;
    justify-content: space-between; 
    align-items: center; 
    padding: 20px;
    color: white;
 
  }

  h2{
    cursor: pointer;
  }

  span{
    font-size:0.7rem;
  }

  .profile {
    display: flex;
    align-items: center;
    gap:10px;

  }

  img{
    max-width:40px;
    max-height:40px;
    border-radius: 20px;
    
  }
`;
function GlobalHeader() {
  return (
    <GlobalHeaderStyle>
      <div className="flex-wrapper">
        <h2>Logo</h2>
        <SearchBar />
        <div className="profile">
        <div className="profile-icon">
            <Image src={icon} alt=""/>
        </div>
        <span>Vangelis <br />Chasiotis</span>
        </div>
      </div>
    </GlobalHeaderStyle>
  );
}

export default GlobalHeader;
