import React from 'react'
import styled from 'styled-components'
import images from "../Assets/velocity.png"
import images2 from "../Assets/working.png"

const Events = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Top>EVENTS</Top>
                <Bottom>Hear from today’s <br /> fearless builders and <br /> innovators</Bottom>
                <P>Learn more</P>
            </Left>
            <Left2>
                <Images src={images} />
            </Left2>
            <Left2>
                <Images src={images2} />
            </Left2>
        </Wrapper>
    </Container>
  )
}

export default Events

const Images = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const P = styled.div`
    color: #0052cc;
    cursor: pointer;
    margin-top: 30px;
`

const Bottom = styled.h2`
    font-size: 2.25rem;
    line-height: 1.33333333;
    color: #253858;
    letter-spacing: 0;
    font-weight: 500;
    margin: 0;
`

const Top = styled.h5`
    color: #008da6 !important;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 1.6px;
`
const Left2 = styled.div`
    width: 380px;
    height: 380px;
    display: flex;
    border-radius: 5px;
    overflow: hidden;
`

const Left = styled.div`
    width: 380px;
    height: 380px;
    display: flex;
    flex-direction: column
`

const Wrapper = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
`

const Container = styled.div`
    width: 100%;
    display: flex;
    margin-top: 35px;
    justify-content: center
`