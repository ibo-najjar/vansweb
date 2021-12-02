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
  padding: 0px 12px;
`;
export const NavLogo = styled.div`
  display: flex;
  /* align-items: center; */
  width: 100px;
  height: auto;
  /* overflow: hidden; */
  min-width: 30px;
  justify-content: left;

  @media screen and (max-width: 768px) {
    margin-right: 65%;
    width: 40px;
  } ;
`;
export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: flex;
    /* position: absolute; */
    top: 0;
    right: 0;
    /* transform: translate(-100%, 60%); */
    font-size: 2.2rem;
    cursor: pointer;
    color: #de2c33;
    width: 18px;
  } ;
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -60px;

  @media screen and (max-width: 1000px) {
    /* margin-right: -400px; */
  }

  @media screen and (max-width: 768px) {
    display: none;
  } ;
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
export const ButtonWrapper = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  } ;
`;

export const Arrow1 = styled(BsArrowBarRight)`
  margin-left: 8px;
  font-size: 20px;
`;
export const Arrow2 = styled(BiArrowToRight)`
  margin-left: 8px;
  font-size: 20px;
`;
