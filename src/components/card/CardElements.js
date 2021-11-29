import styled from "styled-components";
import { motion } from "framer-motion";

export const Card3dDeminsion = styled.div`
  width: 100%;
  height: 625px;
  perspective: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardContainer = styled(motion.div)`
  width: 285px;
  height: 500px;
  display: flex;
  flex-direction: column;
  border-radius: 25px;
  box-shadow: 0 2px 7px 1px rgba(31, 31, 31, 0.2);
  background-color: #121212;
  color: #fff;
  position: relative;
  cursor: grab;
`;

export const CircleWrapper = styled.div`
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  border-top-right-radius: 25px;
`;

export const Circle = styled.div`
  position: absolute;
  width: 350px;
  height: 350px;
  top: -4.2rem;
  right: -10rem;
  z-index: 5;
  background-size: cover;
  background-repeat: repeat;
  background-color: #de2c33;
  border-radius: 50%;
`;

export const HangingLaces = styled(motion.img)`
  width: 200px;
  height: auto;
  z-index: 6;
  top: -0.1rem;
  right: 1.4rem;
  position: absolute;
`;

export const TopConatiner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1.2;
  position: relative;
  align-items: center;
  justify-content: flex-end;
  padding: 1em 15px;
`;
export const BottomConatiner = styled.div`
  display: flex;
  flex: 0.8;
  padding: 0 1em;
`;

export const CardText = styled.h1`
  color: #fff;
  text-transform: uppercase;
  margin: 0;
  z-index: 10;
  font-size: 48px;
  font-weight: 900;
  margin-bottom: 15px;
`;

export const ShoesWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Shoes = styled(motion.div)`
  width: auto;
  height: 180px;
  z-index: 99;
  user-select: none;
  /* overflow: hidden; */
  margin-right: 1em;
  margin-top: 2em;
  img {
    width: auto;
    height: 100%;
    user-select: none;
  }
`;
