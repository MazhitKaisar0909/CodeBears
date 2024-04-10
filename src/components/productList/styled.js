import styled from "styled-components";
import { AiFillPlusCircle } from "react-icons/ai";
import { RxCrossCircled } from "react-icons/rx";

export const StyledSection = styled.section`
  padding: 30px 0;
  margin-bottom: 80px;
  margin-top: 70px;
  @media (min-width: 768px) {
    margin-bottom: 100px;
  }
  @media (min-width: 1024px) {
    margin-bottom: 250px;
  }
`;

export const TitleWrapperProdList = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (min-width: 1024px) {
    align-items: normal;
  }
`;

export const StyledH2 = styled.h2`
  font-size: xx-large;
  font-family: "Inter", sans-serif;
  font-weight: 700;
`;

export const StyledP = styled.p`
  color: rgba(151, 149, 181, 1);
`;

export const StyledList = styled.ul`
  margin-top: 50px;
`;

export const StyledItem = styled.li`
  /* &:after{
        content: '';
        width: 100%;
        height: 2px;
    } */
  border-bottom: 2px solid rgba(255, 255, 255, 0.24);
  padding: 30px 0;
`;

export const StyledSubTitle = styled.h6`
  margin-bottom: 17px;
  font-weight: 700;
`;

export const StyledWraper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledButton = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
`;

export const StyledPlus = styled(AiFillPlusCircle)`
  font-size: 20px;
  color: rgba(41, 41, 41, 1);
`;

export const StyledCross = styled(RxCrossCircled)`
  font-size: 20px;
  color: rgba(87, 255, 154, 1);
`;
