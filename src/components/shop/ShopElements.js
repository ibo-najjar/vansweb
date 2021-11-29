import styled from "styled-components";

export const ShopConatiner = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  height: auto;
  flex-direction: column;
`;
export const ShopWrapper = styled.div`
  display: grid;
  height: auto;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
`;
export const ShopRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;
export const Column1 = styled.div`
  margin-top: 100px;
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;

  padding: 20px 15px;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
  overflow: hidden;
`;

export const TextWrapper = styled.div`
  margin-top: 10px;
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
  text-align: center;
`;

export const Heading = styled.h1`
  font-size: 48px;
  font-weight: 600;
  color: #121212;
  margin-bottom: 20px;
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Divider = styled.hr`
  border-top: 2.5px solid #bbb;
`;

export const Sub = styled.p`
  max-width: 440px;
  margin-bottom: 25px;
  font-size: 18px;
  line-height: 24px;
  margin-top: 20px;
`;
export const BtnWrap = styled.div`
  display: flex;
  /* display: none; */
  justify-content: center;
`;

export const ImgWrap = styled.div`
  margin-top: 20px;
  max-width: 600px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
`;
export const ShopHeading = styled.div``;
export const ShopItemsContainer = styled.div`
  width: 100%;
  justify-content: center;
  height: 100%;
  margin: 10vh 0;
`;
export const ShopItemsWarpper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

export const CardWrapper = styled.div`
  width: 325px;
  height: auto;
`;
export const ShopNav = styled.div`
  display: flex;
  justify-content: center;
`;
