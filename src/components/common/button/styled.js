import styled from 'styled-components'

export const StyledButton = styled.button`
/* background: ${props => props.$primary ? "#BF4F74" : "white"}; */
  color: ${props => props.$primary ? "white" : "#BF4F74"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 1.5px solid rgba(255, 255, 255, 1);
  border-radius: 28px;
  background: transparent;

  margin-top: 7%;

  cursor: pointer;

  &:hover{
        background-color: #fff;
        color: rgba(40, 40, 40, 1);
        transition: 0.7s;
    }
`