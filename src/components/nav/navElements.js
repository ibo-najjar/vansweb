import styled from "styled-components";
import { BsArrowBarRight } from "react-icons/bs";
import { BiArrowToRight } from "react-icons/bi";

export const Nav = styled.div`
  background: #fff;
  opacity: 0.95;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.9);
`;
export const img = styled.div`
  width: 100%;
  height: auto;
`;
export const NavConatiner = styled.div`
  display: flex;
  justify-content: space-around;
  height: 8vh;
  width: 100%;
  max-width: 1500px;
  align-items: center;
`;
export const NavLogo = styled.div`
  display: flex;
  align-items: center;
  width: 110px;
  height: auto;
  overflow: hidden;
  min-width: 30px;
`;
export const MobileIcon = styled.div`
  display: none;
`;
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -60px;
`;
export const NavItem = styled.div``;
export const NavLink = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  color: #121212;
  &:hover {
    color: #de2c33;
  }
`;
export const ButtonWrapper = styled.div``;

export const Arrow1 = styled(BsArrowBarRight)`
  margin-left: 8px;
  font-size: 20px;
`;
export const Arrow2 = styled(BiArrowToRight)`
  margin-left: 8px;
  font-size: 20px;
`;
