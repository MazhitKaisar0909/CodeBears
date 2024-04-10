import React from 'react';
import ModalWindowCard from './ModalWindowCard';
import { configModalWindow } from './configModalWindow';
import { ModalWindowStyled, ModalWrapperStyled } from './styled';

const Modal = ({onClick}) => {
  return (
      <ModalWrapperStyled onClick={() => onClick(false)}>
          <ModalWindowStyled>
              <ul>
                  {configModalWindow.map((contact => (
                      <ModalWindowCard key={contact.id} {...contact} />
                  )))}
              </ul>
          </ModalWindowStyled>
    </ModalWrapperStyled>
  )
}

export default Modal