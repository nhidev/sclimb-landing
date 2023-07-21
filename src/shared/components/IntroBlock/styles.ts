import styled from "styled-components";

export const IntroBlockSection = styled.section`
  position: relative;
  text-align: center;
  display: flex;
  justify-content: center;
  overflow: hidden;
  max-height: 70vh;
  img {
    width:100% ;
    object-fit: cover ;
  }

`;

export const ContentWrapper = styled.div<any>`
  position: absolute;
  width: 100%;
  max-width: 1300px;
  padding: 0 60px;
  position: absolute;
  bottom: 25%;
  left: 0;
  right: 0;
  margin: auto;
  @media only screen and (max-width: 1024px) {
    max-width: calc(100% - 68px);
    padding: 0 30px;
    margin-bottom: 3rem;
  }

  @media only screen and (max-width: 768px) {
    max-width: calc(100% - 38px);
    padding: 0 18px;
    margin-bottom: 0;
  }

  @media only screen and (max-width: 414px) {
    max-width: 100%;
    padding: 0 18px;
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content:  flex-end;
  h6 {
    color: #ffffff;
    white-space: pre-line;
    text-align: left ;
  @media only screen and (max-width: 768px) {
    padding: 0 ;
    font-size: 18px;
    line-height: 1.5;

    }
  }
  button {
    background-color: rgb(243 144 29 / 82%);
    border-color: #f3901d;
    border-radius: 50%;
    color: #000;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 12px;
    width: 80px;
    height: 80px;
    span {
      font-size: 20px;
    }
    &:hover {
      color: #000;
      background-color: rgb(243 144 29 / 82%);
      border-color: #f3901d;
    }
    @media only screen and (max-width: 768px) {
      width: 50px;
      height: 50px;
      span {
      font-size: 14px;
    }
    }
  } 
`;
 