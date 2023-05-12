import styled from "styled-components";

export const ServicesContentSection = styled("section")`
  position: relative;
  padding: 5rem 0 8rem;
  background-color: #323435;

  @media only screen and (max-width: 1024px) {
    padding: 4rem 0 4rem;
  }
`;

export const Title = styled.h2`
  color: #fff;
  font-size: 32px;
  padding: 0.5rem 0;
  margin-bottom: 3rem;
  text-transform: uppercase;
  font-family: "Motiva Sans Light", sans-serif;
`;

export const MinTitle = styled.h6`
  color: #fff;
  font-size: 15px;
  padding: 1rem 0 0.5rem;
  text-transform: uppercase;
  font-family: "Motiva Sans Light", sans-serif;
  text-align:  center;
`;
