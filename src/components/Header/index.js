import React from "react";
import { Button1 } from "../Button/ButtonElements";
import {
  HeaderWrapper,
  Column2,
  HeaderConatiner,
  HeaderRow,
  Column1,
  TextWrapper,
  Heading,
  Sub,
  ImgWrap,
  BtnWrap,
  Img,
} from "./HeaderElements";
import Image from "../../images/Header.png";
import Background from "../../images/889611.jpg";
import { motion } from "framer-motion";
import "./bg.css";

const Header = () => {
  return (
    <>
      <HeaderConatiner
        style={{
          backgroundImage: `url(${Background})`,
        }}
      >
        <HeaderWrapper>
          <HeaderRow>
            <Column1>
              <TextWrapper>
                <Heading>"Off the Wall"</Heading>
                <Sub>
                  Off the Wall is a state of mind. Thinking differently.
                  Embracing creative self-expression. Choosing your own line on
                  your board and in your life. when kids snuck into empty
                  backyard pools seeking to expand the limits of what could be
                  done on skateboards, Off the wall was born. since 1966.
                </Sub>
                <BtnWrap>
                  <Button1 to="Home">learn more</Button1>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap as={motion.div} whileHover={{ scale: 1.1, rotate: 10 }}>
                <Img src={Image} alt="" />
              </ImgWrap>
            </Column2>
          </HeaderRow>
        </HeaderWrapper>
      </HeaderConatiner>
    </>
  );
};

export default Header;
