import React from 'react'
import styled from 'styled-components'
import Staffhead from './Staffhead'
import Staffhome from './Staffhome'
import Staffsidebar from './Staffsidebar'


const Dashboard = () => {
  return (
    <Container>
          <Staffhead />
          <Staffsidebar />

          <Staffhome />
    </Container>
  )
}

export default Dashboard
const Container = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #F5F7FA;
    overflow: hidden;
`