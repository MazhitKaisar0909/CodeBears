import React, { useState } from 'react'
import { StyledItem, StyledSubTitle, StyledP, StyledWraper, StyledButton, StyledPlus, StyledCross  } from './styled'

const Product = ({ title, text }) => {
    const [isOpen, setOpen] = useState(false);
    return (
        <StyledItem id='services'>
            <StyledWraper>
                <StyledSubTitle>
                    {title}
                </StyledSubTitle>

                <StyledButton onClick={()=>{setOpen(prev=>!prev)}}>
                    {!isOpen && <StyledPlus />}
                    {isOpen && <StyledCross />}
                </StyledButton>
            </StyledWraper>

            {isOpen && 
                <StyledP>
                    {text}
                </StyledP>
            }
        </StyledItem>
    )
}

export default Product