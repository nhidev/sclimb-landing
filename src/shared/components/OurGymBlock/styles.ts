import styled from "styled-components";

export const OurGymContentSection = styled("section")`
  height: 480px;
  position: relative;
  background-image: url('/img/our-gym-bg-1.png');
  background-size: contain;
  background-position: left;
  background-repeat: no-repeat;
  @media only screen and (max-width: 1024px) {
    padding: 4rem 0 4rem;
  }
`;
export const Title = styled.h2`
  font-size: 32px;
  padding: 0.5rem 0;
  text-transform: uppercase;
  font-family: "Motiva Sans Light", sans-serif;
  text-align: center ;
`;

export const MinTitle = styled.h6`
  font-size: 16px;
  padding: 1rem 0 0.5rem;
  font-family: "Motiva Sans Light", sans-serif;
  text-align:  center;
`;

export const ContentWrapper = styled.div`
  height: 480px;
  position: relative;
  background: #fff url('/img/our-gym-bg-3.png') center bottom 100% no-repeat ;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 1024px) {
    padding: 4rem 0 4rem;
  }
`
