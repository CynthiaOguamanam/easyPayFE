import React from 'react'
import styled from 'styled-components'
import Staffhead from '../StaffDashboard/Staffhead'
import Staffsidebar from '../StaffDashboard/Staffsidebar'
import Fees from "../StaffDashboard/Fees"
import Tour from "../StaffDashboard/Tour"
import Rentals from './Rentals'
import History from "../StaffDashboard/History"

const Travel = () => {
  return (
      <Container>
          <Staffhead />
      <Staffsidebar />
      <br />
      <br />
          <br />
          <History />
    </Container>
  )
}

export default Travel

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