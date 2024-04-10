import React from 'react'
import { FooterRoutCardLi, FooterRoutCardLink, FooterRoutCardSpan } from './styled'

export const FooterRoutCard = ({ link, text }) => {
    return (
        <FooterRoutCardLi>
            <FooterRoutCardLink href={link}>
                <FooterRoutCardSpan>
                    {text}
                </FooterRoutCardSpan>
            </FooterRoutCardLink>
        </FooterRoutCardLi>
    )
}

export default FooterRoutCard;