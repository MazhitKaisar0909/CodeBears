import { styled } from 'styled-components';

export const ModalWindowStyled = styled.div`
  box-shadow: -2px 3px 5px -1px rgb(147, 101, 255);
  width: 201px;
  height: 247px;
  position: absolute;
  background-color: rgba(23, 23, 23, 1);
  margin-left: 45%;
  margin-top: 150px;
  border-radius: 8px;
`

export const ModalWrapperStyled = styled.div`
  position: fixed; 
  z-index: 1; 
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; 
  overflow: auto;
  background-color: rgba(0,0,0,0.63); 
  
`

export const ModalWindowLi = styled.li`
  list-style: none;
  margin-top: 15px;
`

export const ModalWindowLinkWord = styled.a`
  text-decoration: underline;
  text-decoration-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 23px;
`

export const ModalWindowSvg = styled.img`
  margin-right: 8px;
`

export const ModalWindowText = styled.p`
  color: #fff;
`