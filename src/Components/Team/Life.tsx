import React from 'react'
import styled from 'styled-components'
import images from "../Assets/blog.png"
import images2 from "../Assets/play.png"
import images3 from "../Assets/agile.png"

const Life = () => {
  return (
    <Container>
        <Wrapper>
            <Card>
                <Top>
                    <Images src={images} />
                </Top>
                <Down>
                    <Up>Work Life</Up>
                    <P>Real-life advice, inspiration, and stories <br /> from the working world today.</P>
                    <Read>Read our blog</Read>
                </Down>
            </Card>
            <Card2>
                <Top>
                    <Images src={images2} />
                </Top>
                <Down>
                    <Up>Atlassian Team Playbook</Up>
                    <P>Solve common team challenges with<br /> these group exercises.</P>
                    <Read>Check team health</Read>
                </Down>
            </Card2>
            <Card3>
                <Top>
                    <Images src={images3} />
                </Top>
                <Down>
                    <Up>The Agile Coach</Up>
                    <P>Atlassian's no-nonsense guide to agile <br /> development.</P>
                    <Read>Visit our resources</Read>
                </Down>
            </Card3>
        </Wrapper>
    </Container>
  )
}

export default Life

const Read = styled.div`
    color: #0052cc;
    cursor: pointer;
    margin-top: 30px;
`

const P = styled.div`
    text-align: center;
    color: #253858;
`

const Up = styled.h3`
    font-size: 1.5rem;
    line-height: 1.33333333;
    margin-bottom: 16px;
    color: #253858;
    font-weight: 500;
`

const Down = styled.div`
    width: 100%;
    height: 45%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Images = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const Top = styled.div`
    height: 55%;
    width: 100%;
`
const Card3 = styled.div`
    width: 380px;
    height: 450px;
    display: flex;
    flex-direction: column;
    background-color: #DEEBFF;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    :hover{
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
`
const Card2 = styled.div`
    width: 380px;
    height: 450px;
    display: flex;
    flex-direction: column;
    background-color: #E6FCFF;
    border-radius: 5px;
    margin-bottom: 19px;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    :hover{
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
`

const Card = styled.div`
    width: 380px;
    height: 450px;
    display: flex;
    flex-direction: column;
    background-color: #EAE6FF;
    border-radius: 5px;
    margin-bottom: 19px;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    :hover{
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
`

const Wrapper = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    @media screen and (max-width: 768px) {
        display: flex;
        justify-content: center;
    }
`

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    @media screen and (max-width: 425px) {
        margin-top: 40px;
    }
`