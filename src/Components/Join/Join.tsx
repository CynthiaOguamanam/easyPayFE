import React, {useState} from 'react'
import styled from 'styled-components'
import {AiFillPlayCircle} from "react-icons/ai"
import images from "../Assets/kiva.png"
import images2 from "../Assets/twitter.png"
import images3 from "../Assets/redifin.png"
import images4 from "../Assets/nasa.png"
import images5 from "../Assets/olym.png"
import images6 from "../Assets/cast.png"
import {BiXCircle} from "react-icons/bi"

const Join = () => {
    const [vid, setVid] = useState<Boolean>(true)
    const [cancle, setCancle] = useState<Boolean>(true)

    const Show = () => {
        setVid(false)
    }

    const Can = () => {
        setCancle(true)
        setVid(true)
    }
  return (
    <Container>
        <Top>Join the teams that achieve the impossible every day</Top>
        <Watch onClick={Show}><Icons><AiFillPlayCircle /></Icons>Watch a customer story</Watch>
        <Wrapper>
            <Logo>
            <Images src={images} />
            <Images src={images2} />
            <Images src={images3} />
            <Images2 src={images4} />
            <Images src={images5} />
            <Images3 src={images6} />
        </Logo>
        </Wrapper>
        {!vid ? (
            <VidHold>
              <Card>
                <iframe 
                width="853" 
                height="480" 
                src="https://www.youtube.com/embed/25E6FPy9SPc" 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
            </iframe>
              </Card>
              <Cancle onClick={Can} onChangeCapture={Show}><BiXCircle /></Cancle>
        </VidHold>
        ) : null}
    </Container>
  )
}

export default Join
const Cancle = styled.div`
    font-size: 40px;
    position: absolute;
    right: 20px;
    top: 20px;
    cursor: pointer;
`
const Card = styled.div`
    width: 60%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const VidHold = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.7);
    position: absolute;
    top: 0;
    position: fixed;
`
const Wrapper = styled.div`
    width: 90%;
    height: 60px;
    display: flex;
    margin-top: 70px;
`
const Images3 = styled.img`
    height: 90px;
    margin-top: -25px;
`
const Images2 = styled.img`
    height: 100px;
    margin-top: -25px;
`

const Images = styled.img`
    
`

const Logo = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

const Icons = styled.div`
    color: #0052cc;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    margin-right: 10px;
    cursor: pointer;
    :hover{
        visibility: hidden;
    }
`

const Watch = styled.div`
    color: #0052cc;
    display: flex;
    cursor: pointer
`

const Top = styled.h4`
    font-size: 1.25rem;
    line-height: 1.2;
    color: #253858;
    letter-spacing: .3px;
`

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #EFF5FF;
    align-items: center;
    padding-bottom: 60px;
    position: relative;
`