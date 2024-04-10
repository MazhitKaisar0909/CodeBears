import React from 'react'
import { ModalWindowLi, ModalWindowLinkWord, ModalWindowSvg, ModalWindowText } from './styled'

const ModalWindow = ({ link, icon, text }) => {
    return (
        <ModalWindowLi>
            <ModalWindowLinkWord href={link}>
                <ModalWindowText>
                    {text}
                </ModalWindowText>
                <ModalWindowSvg src={icon} />
            </ModalWindowLinkWord>
        </ModalWindowLi>
    )
}

export default ModalWindow