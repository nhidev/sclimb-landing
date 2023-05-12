import styled from "styled-components";

export const IntroBlockSection = styled.section`
  position: relative;
  text-align: center;
  display: flex;
  justify-content: center;
  overflow: hidden;
  img {
    width:100% ;
    object-fit: cover ;
  }

`;

export const ContentWrapper = styled.div<any>`
  position: absolute;
  width: 100%;
  max-width: 1200px;
  padding: 0 60px;
  position: absolute;
  bottom: 25%;
  left: 0;
  right: 0;
  margin: auto;

  @media only screen and (max-width: 1024px) {
    max-width: calc(100% - 68px);
    padding: 0 30px;
  }

  @media only screen and (max-width: 768px) {
    max-width: calc(100% - 38px);
    padding: 0 18px;
  }

  @media only screen and (max-width: 414px) {
    max-width: 100%;
    padding: 0 18px;
  }
`;
export const Content = styled.div`
  padding: 0.75rem 0 0.75rem;
  display: flex;
  flex-direction: column;
  h6 {
    color: #ffffff;
    white-space: pre-line;
    text-align: left ;

  @media only screen and (max-width: 768px) {
   font-size: 16px;
  }
  }
`;
 