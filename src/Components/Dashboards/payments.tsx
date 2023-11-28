import React from 'react'
import styled from 'styled-components'
import Dashhead from './Dashhead'
import Lists from './Lists'
import Pay from './Pay'
import SideBar from './SideBar'

const Payments = () => {
  return (
      <Container>
          <Dashhead />
      <SideBar />
      <br />
      <br />
      <br />
      <Pay />
    </Container>
  )
}

export default Payments

const Container = styled.div`
    width: calc(100% - 19%);
    display: flex;
    flex-direction: column;
    /* background-color: blue; */
    /* margin-left: 260px; */
    @media screen and (max-width: 1024px){
        width: 100%;
        display: flex;
        align-items: center;
    }
`