import { styled } from "styled-components";

export const StyledFooter = styled.footer`
  background-color: #111112;
  padding-top: 100px;
  padding-bottom: 100px;
  font-family: "DM Sans", sans-serif;
`;

export const FooterNav = styled.nav`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 768px) {
    justify-content: space-between;

    flex-direction: unset;
  }
`;

export const FooterP = styled.p`
  color: #fff;
`;

export const FooterContCardLi = styled.li`
  list-style: none;
  margin-top: 15px;
  &:not(:last-child) {
    margin-right: 30px;
  }
  @media (min-width: 768px) {
    margin-right: 0;
    font-family: "DM Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;

    color: #ffffff;
  }

  @media (min-width: 1024px) {
    font-size: 16px;
  }
`;

export const FooterContCardLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

export const FooterContCardSvg = styled.img`
  margin-right: 0;
  @media (min-width: 768px) {
    margin-right: 8px;
  }
`;

export const FooterContCardText = styled.span`
  color: #fff;
  display: none;

  @media (min-width: 768px) {
    display: inline-block;
  }
`;

export const FooterRoutCardLi = styled.li`
  list-style: none;
  margin-top: 15px;
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 18px;
  text-align: center;

  color: #ffffff;

  @media (min-width: 768px) {
    font-size: 12px;
  }

  @media (min-width: 1024px) {
    font-size: 16px;
  }
`;

export const FooterContactCardUl = styled.ul`
  display: flex;

  @media (min-width: 768px) {
    display: unset;
  }
`;

export const FooterRoutCardUl = styled.ul`
  margin-top: 40px;

  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const FooterRoutCardLink = styled.a`
  text-decoration: none;
`;

export const FooterRoutCardSpan = styled.span`
  color: #fff;
`;
