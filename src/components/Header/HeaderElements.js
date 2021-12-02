import styled from "styled-components";

export const HeaderConatiner = styled.div`
  color: white;
  background-size: cover;
  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;
export const HeaderWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 960px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  /* padding: 0 24px; */
  justify-content: center;
`;
export const HeaderRow = styled.div`
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
  margin-bottom: 15px;
  padding: 4px 15px;
  grid-area: col1;
  /* margin-right: 50px; */
  background-color: rgba(18, 18, 18, 0.7);
  border-radius: 30px;
  /* padding: 20px 15px; */
  @media screen and (max-width: 768px) {
    border-radius: 0px;
  }
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
  margin-left: 50px;
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
  color: #fff;
  margin-bottom: 20px;
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Sub = styled.p`
  /* max-width: 440px; */
  margin-bottom: 25px;
  font-size: 18px;
  line-height: 24px;
  color: white;
`;
export const BtnWrap = styled.div`
  display: flex;
  /* display: none; */
  justify-content: center;
`;

export const ImgWrap = styled.div`
  margin-top: 15px;
  max-width: 650px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 20px;
`;
