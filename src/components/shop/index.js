import React from "react";
import { motion } from "framer-motion";
import Card from "../card/index";
import VansText from "../../images/offthewall.png";

import {
  ShopWrapper,
  Column2,
  ShopConatiner,
  ShopRow,
  Column1,
  TextWrapper,
  Heading,
  Sub,
  ImgWrap,
  BtnWrap,
  Img,
  ShopItemsContainer,
  ShopHeading,
  ShopItemsWarpper,
  ShopNav,
  CardWrapper,
  Divider,
} from "./ShopElements";
import { ButtonGroup, Button } from "@material-ui/core";
import { data } from "./ShoeData";
import { Button1 } from "../Button/ButtonElements";

const Shop = () => {
  return (
    <>
      <ShopConatiner>
        <ShopWrapper>
          <ShopRow>
            <Column1>
              <TextWrapper>
                <Heading>Shop ME</Heading>
                <Divider></Divider>
                <Sub>
                  First known as the Vans #36, the Old Skool debuted in 1977
                  with a unique new addition: a random doodle drawn by founder
                  Paul Van Doren, and originally referred to as the “jazz
                  stripe.” Today, the famous Vans Sidestripe has become the
                  unmistakable—and instantly recognizable—hallmark of the Vans
                  brand.
                </Sub>
                <BtnWrap>
                  <Button1 to="Home">Get your own</Button1>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={VansText} alt="" />
              </ImgWrap>
            </Column2>
          </ShopRow>
        </ShopWrapper>
        <ShopItemsContainer>
          <ShopNav>
            <ShopHeading></ShopHeading>
            <ButtonGroup
              size="large"
              variant="text"
              aria-label="text button group"
            >
              <Button>Featured</Button>
              <Button>Latest</Button>
              <Button>All</Button>
            </ButtonGroup>
          </ShopNav>
          <ShopItemsWarpper>
            <CardWrapper>
              <Card
                name={data[0].name}
                price={data[0].price}
                color={data[0].color}
                shoesImageUrl={data[0].shoesImageUrl}
              />
            </CardWrapper>
            <CardWrapper>
              <Card
                name={data[1].name}
                price={data[1].price}
                color={data[1].color}
                shoesImageUrl={data[1].shoesImageUrl}
                bgImage={data[1].bgImage}
              />
            </CardWrapper>
            <CardWrapper>
              <Card
                name={data[2].name}
                price={data[2].price}
                color={data[2].color}
                shoesImageUrl={data[2].shoesImageUrl}
              />
            </CardWrapper>
            <CardWrapper>
              <Card
                name={data[3].name}
                price={data[3].price}
                color={data[3].color}
                shoesImageUrl={data[3].shoesImageUrl}
              />
            </CardWrapper>
            <CardWrapper>
              <Card
                name={data[4].name}
                price={data[4].price}
                color={data[4].color}
                shoesImageUrl={data[4].shoesImageUrl}
              />
            </CardWrapper>
            <CardWrapper>
              <Card
                name={data[5].name}
                price={data[5].price}
                color={data[5].color}
                shoesImageUrl={data[5].shoesImageUrl}
              />
            </CardWrapper>
          </ShopItemsWarpper>
        </ShopItemsContainer>
      </ShopConatiner>
    </>
  );
};

export default Shop;
