import React from 'react';
import { StyledButton } from './styled';
import { configBtn } from './configBtn';

const Button = ({id}) => {
    const {text, type, primary} = configBtn[id];
  return (
    <StyledButton type={type} $primary={primary}>
        {text}
    </StyledButton>
  )
}

export default Button