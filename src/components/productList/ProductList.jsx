import React from 'react';
import {Container} from '../common/styled'
import {configProdList} from './configProductList';
import Product from './Product';
import { StyledH2, StyledList, StyledP, StyledSection, TitleWrapperProdList } from './styled';

const ProductList = () => {
  return (
    <StyledSection>
        <Container>
                <TitleWrapperProdList>
                    <StyledH2>
                        Products List
                    </StyledH2>
                    <StyledP>
                        We successfully compete in every type of development, design,<br /> marketing and etc. But here it is, but a bit more detailed. :)
                    </StyledP>
                </TitleWrapperProdList>
                <StyledList>
                    {configProdList.map((item) => (
                        <Product key={item.title} {...item} />
                    ))}
                </StyledList>
        </Container>
    </StyledSection>
  )
}

export default ProductList