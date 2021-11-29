import styled from "styled-components";

export const Container = styled.div`
  padding: 80px 60px;
  background-size: cover;
  background-repeat: no-repeat;
  color: red; // temp
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
`;

export const CreatorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const ImgWrap = styled.div`
  /* margin-top: 20px; */
  max-width: 600px;
  /* height: 100%; */
  margin-bottom: 10px;
`;

export const Img = styled.img`
  width: 100%;
  /* margin: 0 0 10px 0; */
`;

export const Divider = styled.hr`
  border-top: 2.5px solid #bbb;
`;

export const Sub = styled.p`
  max-width: 440px;
  /* margin-bottom: 25px; */
  font-size: 15px;
  line-height: 24px;
  margin-top: 10px;
  color: #fff;
`;

export const TextWrapper = styled.div``;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
  /* background-color: rgba(18, 18, 18, 0.7); */
  padding: 20px 10px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const Link = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 20px;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #de2c33;
    transition: 200ms ease-in;
  }
`;

export const Title = styled.p`
  color: #fff;
  font-size: 26px;
  margin-bottom: 40px;
  font-weight: bold;
`;
