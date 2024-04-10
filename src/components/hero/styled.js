import styled from "styled-components";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

export const Arrow = styled(HiOutlineArrowNarrowRight)`
  height: 24px;
  width: 40px;
  color: #9f9f9f;
`;

export const BlockImg = styled.img`
  position: relative;
  opacity: 0.3;
  z-index: 1;

  width: 241px;
  height: 130px;
  @media (min-width: 768px) {
    position: relative;
    opacity: 0.3;
    z-index: 1;

    width: 367px;
    height: 154px;
  }

  @media (min-width: 1045px) {
    width: 100%;
    height: 100%;
    position: relative;
    opacity: 0.3;
    z-index: 1;
  }
`;

export const BlockShadowImg = styled.img`
  position: absolute;
  left: 25px;
  top: 25px;
  z-index: 0;

  width: 241px;
  height: 130px;
  @media (min-width: 768px) {
    position: absolute;
    left: 25px;
    top: 25px;
    z-index: 0;

    width: 367px;
    height: 154px;
  }

  @media (min-width: 1045px) {
    width: 100%;
    height: 100%;

    position: absolute;
    left: 25px;
    top: 25px;
    z-index: 0;
  }
`;

export const GreenWord = styled.span`
  color: #57ff9a;
  text-shadow: 0px 0px 7px rgba(87, 255, 154, 1), 0 0 2em rgba(87, 255, 154, 1),
    0 0 1.2em rgba(87, 255, 154, 1);

  @media (max-width: 445px) {
    text-shadow: none;
  }
`;

export const PurpleWord = styled.span`
  color: #9365ff;
`;

export const BoldWord = styled.span`
  font-weight: bold;
`;

export const ImageText = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 300;
  font-size: 8px;
  line-height: 13px;
  width: 225px;
  margin-bottom: -2px;
  color: #ffffff;

  @media (min-width: 768px) {
    font-family: "Inter";
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 13px;
    color: #ffffff;
    width: 323px;
    margin-bottom: 3px;
  }

  @media (min-width: 1045px) {
    font-family: "Inter";
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;

    width: 463px;
    margin-bottom: 10px;
  }
`;

export const FlexBox = styled.div`
  display: flex;
  align-items: center;
`;

export const BookService = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 24px;

  color: #5b5b5b;

  @media (min-width: 768px) {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 24px;
    margin-right: 14px;

    color: #5b5b5b;
  }

  @media (min-width: 1045px) {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    margin-right: 14px;

    color: #5b5b5b;
  }
`;

export const Button = styled.button`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    width: 38px;
    height: 20px;

    background: #282829;
    box-shadow: inset 0px 4px 10px rgba(0, 0, 0, 0.15);
    border-radius: 6px;
  }

  @media (min-width: 1045px) {
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    width: 58px;
    height: 30px;

    background: #282829;
    box-shadow: inset 0px 4px 10px rgba(0, 0, 0, 0.15);
    border-radius: 6px;
  }
`;

export const HeroSection = styled.section``;

export const HeroTitle = styled.h1`
  display: none;
  @media (min-width: 768px) {
    display: block;
    margin-top: 101px;
    margin-bottom: 30px;
    font-size: 28px;
  }

  @media (min-width: 1045px) {
    display: block;
    font-size: 60px;
    margin-top: 50px;
  }
`;

export const HeroSubTitle = styled.p`
  display: none;
  @media (min-width: 768px) {
    display: none;
  }

  @media (min-width: 1045px) {
    display: block;
    font-family: "Inter", sans-serif;
  }
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const BearWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 81px;
  align-items: center;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 70px;
  }

  @media (min-width: 1045px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 70px;
  }
`;

export const MainImg = styled.img`
  width: 172px;
  height: 199px;
  margin-bottom: -25px;
  @media (min-width: 768px) {
    width: 196px;
    height: 227px;
    margin-bottom: 0;
  }

  @media (min-width: 1045px) {
    margin-bottom: 0;
    width: 348px;
    height: 403px;
  }
`;

export const GrayBlock = styled.div`
  position: relative;
  display: inline-block;
`;

export const OverlayContent = styled.div`
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff; /* Цвет текста */
`;

export const SliderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 768px) {
    flex-direction: row;
  }
  @media (min-width: 1024px) {
    justify-content: space-around;
  }
`;

export const TextButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  gap: 20px;
  margin-bottom: 30px;
  @media (min-width: 1024px) {
    flex-direction: column;
    gap: 50px;
  }
`;

export const TextButtonH2 = styled.h2`
  font-weight: 700;
  font-size: 28px;
  @media (min-width: 1024px) {
    font-size: 56px;
  }
`;

export const TextButtonP = styled.p`
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 160%;
  /* or 160% */
  text-align: center;
  color: #9795b5;
  width: 240px;
  @media (min-width: 768px) {
    width: 240px;
  }
  @media (min-width: 1024px) {
    font-size: 18px;
    width: 455px;
    text-align: left;
  }
`;
export const SliderButtonWrapper = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    gap: 8px;
    position: relative;
  }
`;
export const SliderButtonWrapperMob = styled.div`
  margin-top: 40px;
  display: flex;
  gap: 15px;
  position: relative;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const SilderButton = styled.button`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  width: 120px;
  height: 45px;
  padding: 15px 20px;
  border-radius: 30px;
  border: 1px solid #5197ff;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: rgba(40, 40, 40, 1);
  color: #fff;
  font-family: "DM Sans", sans-serif;

  &:hover {
    background-color: #fff;
    color: rgba(40, 40, 40, 1);
    transition: 0.7s;
  }
  @media (min-width: 744px) {
    font-size: 12px;
  }
`;

export const HrefButton = styled.a`
  color: #fff;
  &:hover {
    background-color: #fff;
    color: rgba(40, 40, 40, 1);
    transition: 0.7s;
  }
`;

export const MainImgWork = styled.img`
  width: 250px;
  @media (min-width: 744px) {
    width: 275px;
  }
  @media (min-width: 1024px) {
    width: 510px;
  }
  @media (min-width: 1440px) {
    width: 555px;
  }
`;
