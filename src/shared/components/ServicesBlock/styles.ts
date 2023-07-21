import styled from "styled-components";

export const ServicesContentSection = styled("section")`
  position: relative;
  padding: 5rem 0 2rem;
  background-color: #323435;
  .ant-image {
    display: flex;
    /* outline: rgb(255 193 7 / 24%) solid 125px;
    outline-offset: -125px; */
    overflow: hidden;
    position: relative;
   
  }

  .text-div {
    position: absolute;
    top: 40%;
    left: 0;
    right: 0;
    margin: auto;
    border: 1px solid white;
    font-size: 18px;
    font-weight: 400;
    color: white;
    background-color: transparent;
    width: 60%;
  }
  @media only screen and (max-width: 1024px) {
    padding: 4rem 0 2rem;
  }
`;

export const Title = styled.h2`
  color: #fff;
  font-size: 32px;
  padding: 0.5rem 0;
  margin-bottom: 3rem;
  text-transform: uppercase;
  font-family: 'Be Vietnam Pro Light', sans-serif;
`;

export const MinTitle = styled.h6`
  color: #fff;
  font-size: 15px;
  padding: 1rem 0 0.5rem;
  text-transform: uppercase;
  font-family: 'Be Vietnam Pro Light', sans-serif;
  text-align:  center;
`;
