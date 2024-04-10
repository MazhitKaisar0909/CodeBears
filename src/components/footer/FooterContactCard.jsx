import React from 'react';
import { FooterContCardLi, FooterContCardLink, FooterContCardSvg, FooterContCardText } from './styled';

const FooterContactCard = ({ link, icon, text }) => {
  return (
    <FooterContCardLi>
      <FooterContCardLink href={link}>
        <FooterContCardSvg src={icon} />
        <FooterContCardText>
          {text}
        </FooterContCardText>
      </FooterContCardLink>
    </FooterContCardLi>
  );
};

export default FooterContactCard;
