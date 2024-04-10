import React, { useState, useEffect } from "react";
import { Container } from "../common/styled";
import { configFooterContacts, configFooterRout } from "./configFooter";
import FooterContactCard from "./FooterContactCard";
import FooterRoutCard from "./FooterRoutCard";
import { StyledFooter, FooterNav, FooterP, FooterContactCardUl, FooterRoutCardUl } from "./styled";

const Footer = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {isLargeScreen ? (
        <StyledFooter>
          <Container>
            <FooterNav>
              <FooterContactCardUl>
                {configFooterContacts.map((contact) => (
                  <FooterContactCard key={contact.id} {...contact} />
                ))}
              </FooterContactCardUl>

              <FooterP>CODEBEAR.</FooterP>

              <ul>
                {configFooterRout.map((rout) => (
                  <FooterRoutCard key={rout.id} {...rout} />
                ))}
              </ul>
            </FooterNav>
          </Container>
        </StyledFooter>
      ) : (
        <StyledFooter>
          {" "}
          <Container>
            <FooterNav>
              <FooterP>CODEBEAR.</FooterP>
              <FooterContactCardUl>
                {configFooterContacts.map((contact) => (
                  <FooterContactCard key={contact.id} {...contact} />
                ))}
              </FooterContactCardUl> 

              <FooterRoutCardUl>
                {configFooterRout.map((rout) => (
                  <FooterRoutCard key={rout.id} {...rout} />
                ))}
              </FooterRoutCardUl>
            </FooterNav>
          </Container>
        </StyledFooter>
      )}
    </>
  );
};

export default Footer;
