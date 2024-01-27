import styled from "styled-components";

const dashboard = styled.div`
  .wrapper {
    display: flex;
    flex-direction: column;
    max-width: calc(100%);
    min-height: 1200px;
    border-radius: 10px;
    margin: 50px auto;
    background-color: #b7b7b7c8;
  }

  @media (max-width: 600px) {
    .wrapper {
      background-color: #b7b7b7c8;
      margin: 0!important;
    }
  }
`;

export default dashboard;
