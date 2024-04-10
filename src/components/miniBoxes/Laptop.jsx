import React from 'react'
import ImgLaptop from '../../assets/main/laptop.png'
import { BigWordsH1, BigWordsWraper, BigNumberH1, StyledDivPosition, StyledImg } from './styled'

const Laptop = () => {
  return (
    <StyledDivPosition id='about-us'>
      <BigWordsWraper>
        <BigWordsH1>
          WHY YOU <br /> SHOULD<br /> CHOOSE<br /> US?
        </BigWordsH1>
        <BigNumberH1>01</BigNumberH1>
      </BigWordsWraper>
      <StyledImg src={ImgLaptop} alt="laptop" />
    </StyledDivPosition>
  )
}

export default Laptop