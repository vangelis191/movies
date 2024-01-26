import React, { useEffect } from "react";
import SearchBar from "../searchBar/SearchBar";
import styled from "styled-components";
import Image from "next/image";
import icon from "../../../assets/naruto.jpeg";
import Link from "next/link";
export const GlobalHeaderStyle = styled.div`
  .logo {
    margin: 0px;
    z-index: 1000;
    height: 30px;
    font-size: 3rem;
  }
  .flex-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    color: white;
    flex-wrap: wrap;
  }

  h2 {
    cursor: pointer;
  }

  span {
    font-size: 0.7rem;
  }

  .profile {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  img {
    max-width: 40px;
    max-height: 40px;
    border-radius: 20px;
  }

  @media (max-width: 1530px) {
    a {
      position: relative;
     left: 250px;
    }

    .profile {
     position: relative;
     right:100px;
  }
  }

  @media (max-width: 600px) {
    .logo-wrapper {
      position: relative;
     left: 350px;
    }
    .profile {

     right:450px;
  }
  }
  @media (max-width: 500px) {
  
    .profile {
     right:500px;
  }
  }
`;

interface GlobalHeaderProps {
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

const GlobalHeader: React.FC<GlobalHeaderProps> = ({ setSearchQuery }) => {

  return (
    <GlobalHeaderStyle>
      <div className="flex-wrapper">
        <Link href="/">
          <div className="logo-wrapper">
            <span className="material-symbols-outlined logo">home</span>
          </div>{" "}
        </Link>
        <SearchBar setSearchQuery={setSearchQuery} />
        <div className="profile">
          <div className="profile-icon">
            <Image src={icon} alt="" />
          </div>
          <span>
            Vangelis <br />
            Chasiotis
          </span>
        </div>
      </div>
    </GlobalHeaderStyle>
  );
};

export default GlobalHeader;
