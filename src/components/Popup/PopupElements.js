import styled from "styled-components";

export const PopupContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 100;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const PopupWrapper = styled.div`
  /* position: relative; */
  padding: 32px;
  width: 100%;
  max-width: 640px;
  height: 100%;
  /* background-color: #fff; */
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const TextWrapper = styled.p`
  font-size: 60px;
  margin-bottom: 40px;
  @media (max-width: 460px) {
    font-size: 40px;
  }
`;
