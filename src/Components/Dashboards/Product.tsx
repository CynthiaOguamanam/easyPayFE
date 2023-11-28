import React from 'react'
import styled from 'styled-components'
import Dashhead from './Dashhead'
import Lists from './Lists'
import SideBar from './SideBar'

const Product = () => {
  return (
      <Container>
          <Dashhead />
      <SideBar />
      <br />
      <br />
      <br />
      <Lists />
    </Container>
  )
}

export default Product

const Container = styled.div`
    width: calc(100% - 19%);
    display: flex;
    flex-direction: column;
    /* background-color: red; */
    /* margin-left: 260px; */
    @media screen and (max-width: 1024px) {
      width: 100%;
    }
`