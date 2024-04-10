import React from 'react';
import { Section, Moon, Circle, Span, ImgMoon } from './styled';
import ImgMoonBear from '../../assets/main/moonWithBear.png';

const AnimMoon = () => {
    const text = " LETS MAKE THE INTERNET MORE COMFORTABLE";

    return (
        <Section>
            <Moon>
                <ImgMoon src={ImgMoonBear} alt='moon' />
            </Moon>
            <Circle>
                {text.split('').map((char, index) => (
                    <Span key={index} index={index + 1}>
                        {char}
                    </Span>
                ))}
            </Circle>
        </Section>
    );
}


export default AnimMoon