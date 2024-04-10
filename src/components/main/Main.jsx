import React from 'react'
import Contact from '../contact'
import { StyledMain } from './styled'
import ProductList from '../productList'
import MiniBoxes from '../miniBoxes'
import Moon from '../animationMoon/Moon'
import Hero from '../hero'
import Header from '../header/Header'
import Footer from '../footer/Footer'


const Main = () => {
  return (
    <StyledMain>
      <Header />
      <Hero/>
      <ProductList/>
      <MiniBoxes/>
      <Moon />
      <Contact />
      <Footer />
    </StyledMain>
  )
}

export default Main