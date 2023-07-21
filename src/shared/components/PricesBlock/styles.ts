import styled from "styled-components";

export const PricesContentSection = styled("section")`
  position: relative;
  padding: 0 0 8rem;
  background-color: #323435;
  .text-box {
    display: flex;
    flex-direction: column;
    height: 100%;
     background-color: rgb(255 222 174); 
  }
  .text-white,
  .text-gray {
    background-color: #ddd;
    padding: 24px;
    display: flex;
   > div {
      display: flex;
      flex-direction: column;
      width: 50%;
      > div {
        display: flex;
      justify-content: space-between;
      }
    }
  }
  .text-white {
    background-color: #fff;
  }
  .text-gray {
    background-color: rgb(255 222 174); 
  }
  .ant-image {
    display: flex;
  }
  @media only screen and (max-width: 1024px) {
    padding: 4rem 0 4rem;
    img {
     object-fit: contain;
    }
  }
`;

export const Title = styled.h2`
  font-size: 32px;
  padding: 0.5rem 0;
  margin-bottom: 3rem;
  text-transform: uppercase;
  font-family: 'Be Vietnam Pro Light', sans-serif;
`;

export const MinTitle = styled.h6`
  font-size: 15px;
  padding: 1rem 0 0.5rem;
  text-transform: uppercase;
  font-family: 'Be Vietnam Pro Light', sans-serif;
`;
export const Para = styled.div`
  color: #18216d;
  font-size: 14px;
  font-family: 'Be Vietnam Pro Light', sans-serif;
  margin-bottom: 6px;
  width: 90%;
`;

export const MinPara = styled.p`
  color: #18216d;
  font-size: 13px;
  font-family: 'Be Vietnam Pro Light', sans-serif;
  margin-bottom: 4px;
`;
