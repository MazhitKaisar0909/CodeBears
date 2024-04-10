import styled from "styled-components";
import { SlArrowDown } from "react-icons/sl";

export const ButtonArrow = styled(SlArrowDown)`
  width: 60px;
  height: 30px;
  color: #ffffff;
`;

export const StyledHeader = styled.header`
  @media (min-width: 768px) {
    display: block;
  }

  @media (min-width: 1045px) {
    display: block;
    background-color: #141415;
    padding: 15px 0;
    font-family: "DM Sans", sans-serif;
  }
`;

export const TabletStyleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 250px;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding-top: 250px;
  }

  @media (min-width: 1045px) {
    display: none;
  }
`;

export const TabletStyleTitle = styled.h1`
  font-size: 58px;
  text-align: center;
  font-weight: bold;

  @media (max-width: 445px) {
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 1px;
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

export const HeroSubTitleTablet = styled.p`
  font-family: "Inter", sans-serif;
  width: 100px;
  text-align: center;
  font-size: 10px;
  margin-top: 37px;
  margin-bottom: 213px;
`;

export const BoldWord = styled.span`
  font-weight: bold;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderNavList = styled.ul`
  list-style: none;
  text-decoration: none;
  display: flex;
  gap: 30px;
`;

export const HeaderNavLogoWrapper = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: none;
  }

  @media (min-width: 1045px) {
    display: flex;
    align-items: center;
    gap: 400px;
  }
`;

export const HeaderNavLink = styled.a`
  text-decoration: none;
  color: #fff;
`;

export const ImgBear = styled.img`
  width: 36px;
  height: 40px;
  margin-bottom: 37px;
`;
