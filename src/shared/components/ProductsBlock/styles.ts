import styled from "styled-components";

export const ProductsBlockSection = styled.section`
  position: relative;
  padding: 5rem 0 3rem;
  text-align: center;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    padding: 5rem 0 3rem;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center ;
 

`;

export const Title = styled.h2`
  color: #000;
  font-size: 32px;
  padding: 1rem 0 0.5rem 0;
  text-transform: uppercase;
  font-family: "Motiva Sans Light", sans-serif;
  margin-right: 2rem;
`;

export const Para = styled.p`
  color: #000;
  font-size: 16px;
  padding: 1rem 0 0.5rem;
  font-family: "Motiva Sans Light", sans-serif;
  text-align:  left;
  line-height: 1.5;
  margin-bottom: 3rem;
  max-width: 70%;
  white-space:  pre-line;
  @media only screen and (max-width: 1024px) {
    max-width: 100%;
  }
`;

export const MinTitle = styled.h6`
  color: #000;
  font-size: 15px;
  padding: 1rem 0 0.5rem;
  text-transform: uppercase;
  font-family: "Motiva Sans Light", sans-serif;
`;

export const MinPara = styled.p`
 color: #000;
  font-size: 13px;
  font-family: "Motiva Sans Light", sans-serif;
`;
