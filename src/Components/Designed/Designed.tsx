import React from 'react'
import styled from 'styled-components'
import img from "../Assets/accurate.png"

const Designed = () => {
  return (
      <Container>
          <Wrapper>
              <Top><h1>Designed to be Accurate for Everyone</h1></Top>
              <Wrap>
                  <Img src={img} />
              </Wrap>
          </Wrapper>
    </Container>
  )
}

export default Designed
const Img = styled.img`
    
`
const Hold = styled.div`
    display: flex;
    flex-direction: column;
`
const Wrap = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`
const Top = styled.div`
    h1{
        color: #00214F;
    }
    margin-bottom: 15px;
`
const Wrapper = styled.div`
    width: 92%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding-top: 20px;
    margin-bottom: 30px;
`