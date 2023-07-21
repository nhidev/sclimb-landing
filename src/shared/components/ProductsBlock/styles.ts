import styled from "styled-components";

export const ProductsBlockSection = styled.section`
  color: #000;
  font-size: 16px;
  padding: 1rem 0 0.5rem;
  font-family: 'Be Vietnam Pro Light', sans-serif;
  text-align:  left;
  line-height: 1.5;
  white-space:  pre-line;
  @media only screen and (max-width: 1024px) {
    max-width: 100%;
  }
  position: relative;
  padding: 5rem 0 3rem;
  text-align: center;
  display: flex;
  justify-content: center;
  
  .ant-image {
    display: flex;
  }
  img {
    object-fit: contain;
  }
  .text-center {
    display: flex;
    align-items: center;
  }
  @media screen and (max-width: 1024px) {
    padding: 5rem 0 3rem;
  }
  @media (max-width: 660px) {
    .col {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
    .col-text {
        order: 1;
    }
    .col-img {
        order: 2;
    }

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
  font-family: 'Be Vietnam Pro Light', sans-serif;
  margin-right: 2rem;
`;

export const Para = styled.p`
  color: #000;
  font-size: 16px;
  padding: 1rem 0 0.5rem;
  font-family: 'Be Vietnam Pro Light', sans-serif;
  text-align:  left;
  line-height: 1.5;
  margin-bottom: 3rem;
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
  font-family: 'Be Vietnam Pro Light', sans-serif;
`;

export const MinPara = styled.p`
 color: #000;
  font-size: 13px;
  font-family: 'Be Vietnam Pro Light', sans-serif;
`;
