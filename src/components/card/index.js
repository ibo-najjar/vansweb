import React from "react";
import {
  BottomConatiner,
  Card3dDeminsion,
  CardContainer,
  CardText,
  Circle,
  CircleWrapper,
  Shoes,
  ShoesWrapper,
  TopConatiner,
  HangingLaces,
} from "./CardElements";
import ShoesImage from "../../images/Shoe_long.png"; //original
import {
  DetailsContainer,
  SmallText,
  SpacedHorizontalContainer,
  MediumText,
  BuyButton,
  VansLogo,
} from "./ShoesDetails";
import { useMotionValue, useTransform } from "framer-motion";
import { Marginer } from "../marginer/index";
import laces from "../../images/laces.png";

import BottomLogo from "../../images/redLogo.png";
const Card = (props) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);
  const colorProp = {
    backgroundColor: props.color,
  };

  console.log(props.shoesImageUrl);
  return (
    <>
      <Card3dDeminsion>
        <CardContainer
          style={{ x, y, rotateX, rotateY, z: 100 }}
          drag
          dragElastic={0.16}
          dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
          whileTap={{ cursor: "grabbing" }}
        >
          <TopConatiner>
            <CircleWrapper>
              <Circle style={colorProp} />
            </CircleWrapper>
            <HangingLaces
              src={laces}
              style={{ x, y, rotateX, rotateY, z: 100000 }}
              drag
              dragElastic={0.12}
              whileTap={{ cursor: "grabbing" }}
            />
            <ShoesWrapper>
              <Shoes
                style={{ x, y, rotateX, rotateY, rotate: "-21deg", z: 100000 }}
                drag
                dragElastic={0.12}
                whileTap={{ cursor: "grabbing" }}
              >
                <img src={props.shoesImageUrl} alt="" />
              </Shoes>
            </ShoesWrapper>
            <CardText>old skool</CardText>
          </TopConatiner>
          <BottomConatiner>
            <DetailsContainer>
              <SmallText>Vans</SmallText>
              <SpacedHorizontalContainer>
                <MediumText>{props.name}</MediumText>
                <MediumText>${props.price}</MediumText>
              </SpacedHorizontalContainer>
              <Marginer direction="vertical" margin="1.2em" />
              <SpacedHorizontalContainer>
                <MediumText>ADD-ON YOUR DRIP</MediumText>
                <BuyButton>BUY</BuyButton>
              </SpacedHorizontalContainer>
              <VansLogo>
                <img src={BottomLogo} />
              </VansLogo>
            </DetailsContainer>
          </BottomConatiner>
        </CardContainer>
      </Card3dDeminsion>
    </>
  );
};

export default Card;
