import styled from "styled-components";

export const UpContentSection = styled("section")`
  position: relative;
  padding: 10rem 0 8rem;
  background-color: #252525;
h6 {
  color: #fff;
}
  @media only screen and (max-width: 1024px) {
    padding: 4rem 0 4rem;
  }
`;

export const Content = styled("p")`
  margin: 1.5rem 0 2rem 0;
  color: #fff;
`;

export const ContentWrapper = styled.div`
  position: relative;

  @media only screen and (max-width: 575px) {
    padding-top: 4rem;
  }
`;



export const MinTitle = styled.h6`
  font-size: 15px;
  line-height: 1rem;
  padding: 0.5rem 0;
  text-transform: uppercase;
  color: #fff;
  font-family: "Motiva Sans Light", sans-serif;
`;

export const MinPara = styled.p`
  font-size: 13px;
  color: #fff;
`;
