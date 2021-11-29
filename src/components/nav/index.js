import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

import { Button1 } from "../Button/ButtonElements";
import {
  NavConatiner,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLink,
  ButtonWrapper,
  Arrow1,
  Arrow2,
  Nav,
  Img,
} from "./navElements";
import LogoNav from "../../images/vanslogonav.png";

// import Logo from "../../images/vans-shoes.svg";
const Navbar = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <>
      <Nav>
        <NavConatiner>
          <NavLogo>
            <img src={LogoNav} style={{ overflow: "hidden" }} />
          </NavLogo>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLink to="products">Products</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="contact">Contact</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="socials">Socials</NavLink>
            </NavItem>
          </NavMenu>
          <ButtonWrapper>
            <Button1
              to=""
              imgUrl="../../images/chess.png"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
            >
              SignIn {hover ? <Arrow1 /> : <Arrow2 />}
            </Button1>
          </ButtonWrapper>
        </NavConatiner>
      </Nav>
    </>
  );
};

export default Navbar;
