import React from 'react'
import { MiniBoxesCard, TopLine, SubTitle, BoxesText, StyledUl } from './styled';
import {configMiniBoxes} from './configMiniBoxes';

const Boxes = () => {
    return (
        <StyledUl>
            {configMiniBoxes.map((item, index) => (
                <MiniBoxesCard key={index}>
                    <TopLine />
                    <SubTitle>
                        {item.title}
                    </SubTitle>
                    <BoxesText>
                        {item.text}
                    </BoxesText>
                </MiniBoxesCard>
            ))}
        </StyledUl>
    );
};

export default Boxes;