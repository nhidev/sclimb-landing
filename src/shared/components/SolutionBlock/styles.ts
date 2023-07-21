import styled from "styled-components";

export const SolutionContentSection =  styled.section`
  position: relative;
  padding: 5rem 0 10rem;
  text-align: center;
  display: flex;
  justify-content: center;
  background-color: #252525;
  &:before {
    content: " ";
    background-image: url('/img/svg/mountains.svg');
    background-size: 4000px;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 225px;
    bottom: 0;
    left: 0;
    position: absolute;
}
  @media only screen and (max-width: 1024px) {
    padding: 4rem 0 4rem;
  }
`;

export const Content = styled("p")`
 position: relative;
  max-width: 540px;
  margin: auto ;
  font-size: 15px;
  line-height: 1.5;
  padding: 0.5rem 0;
  text-transform: uppercase;
  color: #fff;
  font-family: 'Be Vietnam Pro Light', sans-serif;
`;

 
export const Title = styled.h2`
  color: #fff;
  font-size: 32px;
  padding: 0.5rem 0;
  text-transform: uppercase;
  color: #fff;
  font-family: 'Be Vietnam Pro Light', sans-serif;
`;

export const MinTitle = styled.h6`
  font-size: 15px;
  line-height: 1.5;
  padding: 0.5rem 0;
  text-transform: uppercase;
  color: #fff;
  font-family: 'Be Vietnam Pro Light', sans-serif;
`;

export const MinPara = styled.p`
  font-size: 13px;
  color: #fff;
`;

