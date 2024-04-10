import styled from "styled-components";

export const StyledUl = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  gap: 70px;
  margin-top: 100px;

  position: absolute;
  z-index: 1;

  @media (min-width: 1024px) {
    right: 20%;
  }
`;

export const MiniBoxesCard = styled.li`
  width: 185px;
  
`;

export const TopLine = styled.div`
  border: 0.5px solid rgba(255, 255, 255, 1);
`;

export const SubTitle = styled.h6`
  color: rgba(255, 255, 255, 1);
  margin: 10px 0;
  font-weight: 700;
`;

export const BoxesText = styled.p`
  color: rgba(255, 255, 255, 1);
`;

export const BigWordsH1 = styled.h1`
  font-size: 57px;
  text-align: center;

  font-weight: 700;
  color: rgba(255, 255, 255, 0.2);
  font-family: "DM Sans", sans-serif;

  @media (min-width: 768px) {
    font-size: 69px;
    text-align: right;
  }
  @media (min-width: 1024px) {
    font-size: 126px;
    text-align: left;
  }
`;

export const BigNumberH1 = styled.h1`

  font-size: 196px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.2);
  font-family: "DM Sans", sans-serif;

  @media (min-width: 1024px) {
    font-size: 515px;
  }
`;

export const BigWordsWraper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row-reverse;
    align-items: start;
  @media (min-width: 1024px) {
    
    align-items: start;
  }
  @media (min-width: 1440px) {
    flex-direction: row;
    align-items: start;
  }
`;

export const StyledImg = styled.img`
  position: absolute;
  z-index: 10;
  right: 0;
  bottom: 0;
  width: 320px;
  left: -81px;
  @media (min-width: 768px) {
    left: 115px;
  }
  @media (min-width: 1024px) {
    width: 768px;
    
  }
  @media (min-width: 1440px) {
    bottom: 50px;
    left: 325px;}
`;

export const StyledDivPosition = styled.div`
  position: relative;
padding-bottom: 200px;

  @media (max-width: 1024px) {
    padding-bottom: 0;
  }
`;