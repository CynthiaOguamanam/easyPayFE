import React from 'react'
import styled from 'styled-components'
import images from "../Assets/jirasoft.png"
import images2 from "../Assets/jiras.png"
import images3 from "../Assets/cof.png"
import images4 from "../Assets/trello.png"
import images5 from "../Assets/bulbe.png"
import images6 from "../Assets/globe.png"
import images7 from "../Assets/compa.png"
import {BsArrowRightShort} from "react-icons/bs"

const Product = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Top>FEATURED</Top>
                <Card>
                    <Side>
                        <Up>
                            <Logo>
                                <Images src={images} />
                            </Logo>
                            <TextHold>
                                <Ups>Jira Software</Ups>
                                <Down>Project and issue tracking</Down>
                            </TextHold>
                        </Up>
                        <Up>
                            <Logo>
                                <Images src={images2} />
                            </Logo>
                            <TextHold>
                                <Ups>Jira Service Management</Ups>
                                <Down>High-velocity ITSM</Down>
                            </TextHold>
                        </Up>
                    </Side>
                    <Side>
                        <Up>
                            <Logo>
                                <Images src={images3} />
                            </Logo>
                            <TextHold>
                                <Ups>Confluence</Ups>
                                <Down>Content collaboration</Down>
                            </TextHold>
                        </Up>
                        <Up>
                            <Logo>
                                <Images src={images4} />
                            </Logo>
                            <TextHold>
                                <Ups>Trello</Ups>
                                <Down>Visual project management</Down>
                            </TextHold>
                        </Up>
                    </Side>
                </Card>
                <Bot>View all products<Icons><BsArrowRightShort /></Icons></Bot>
                <Box>
                        <Point>
                            <Wraps>
                                <Bubh>
                                    <Bu>
                                        <Imagess src={images5} />
                                    </Bu>
                                    <A>
                                        <Bol>New Products from Point A</Bol>
                                        <In>Innovations from Atlassians</In>
                                    </A>
                                </Bubh>
                                <Are><Hh>View products</Hh><Icon><BsArrowRightShort /></Icon></Are>
                            </Wraps>
                        </Point>
                        <Comp>
                            <Wraps>
                                <Globeh>
                                    <Glo>
                                        <Gl src={images6} />
                                    </Glo>
                                    <Als>
                                        <Bol>Atlas</Bol>
                                        <In>Teamwork directory</In>
                                    </Als>
                                </Globeh>
                                <Globeh>
                                    <Glo>
                                        <Gl src={images7} />
                                    </Glo>
                                    <Als>
                                        <Bol>Compass</Bol>
                                        <In>Developer experience platform</In>
                                    </Als>
                                </Globeh>
                            </Wraps>
                        </Comp>
                </Box>
                <Li></Li>
                <Be>
                    <Mark>Marketplace</Mark>
                    <Arr>Connect thousands of apps for all your Atlassian products <Icons><BsArrowRightShort /></Icons></Arr>
                </Be>
            </Left>
            <Right>
                <Brow>BROWSE BY SOLUTION</Brow>
                <Agile>
                    <Ge>Agile & DevOps</Ge>
                    <Ru>Run a world-class agile software organization <br /> from discovery to delivery and operations</Ru>
                </Agile>
                 <Agile1>
                    <Ge>IT Service Management</Ge>
                    <Ru>Enable dev, IT ops, and business teams to<br /> deliver great service at a high velocity</Ru>
                </Agile1>
                <Agile1>
                    <Ge>Work Management</Ge>
                    <Ru>Empower autonomous teams without losing <br /> organizational alignment</Ru>
                </Agile1>
                <Browse>BROWSE BY TEAM TYPE</Browse>
                <Browse2>Enterprise</Browse2>
                <Browse3>Small business</Browse3>
                <Browse3>Startup</Browse3>
                <Browse3>Non-profit</Browse3>
            </Right>
        </Wrapper>
    </Container>
  )
}

export default Product
const Als = styled.div`
    width: 200px;
    display: flex;
    flex-direction: column;
`
const Gl = styled.img`
    margin-left: 20px;
    margin-top: 5px;
`
const Glo = styled.div`
    
`
const Globeh = styled.div`
    width: 50%;
    display: flex;
`
const Icon = styled.div`
    color: #0052cc;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -25px;
    margin-left: 10px;
    :hover{
        text-decoration: underline;
    }
`
const Hh = styled.div`
    display: flex;
    margin-top: 20px;
    cursor: pointer;
`
const Are = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
`
const In = styled.div`
    font-size: 14px;
    color: #253858;
    margin-left: 5px;
`
const Bol = styled.div`
    color: #253858;
    display: flex;
    align-items: center;
    font-weight: 700;
    margin-top: 20px;
    margin-left: 5px;
    :hover{
        color: #0052cc;
    }
`
const A = styled.div`
    width: 270px;
    display: flex;
    flex-direction: column;
`
const Imagess = styled.img`
    
`
const Bu = styled.div`
    margin-top: 20px;
`
const Bubh = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
`
const Wraps = styled.div`
    width: 95%;
    display: flex;
    height: 100%;
    align-items: center;
`
const Comp = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
`
const Point = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center
`
const Browse3 = styled.div`
    font-weight: 700;
    color: #42526e;
    font-size: 14px;
    letter-spacing: 1px;
    margin-left: 50px;
    margin-top: 10px;
`
const Browse2 = styled.div`
    font-weight: 700;
    color: #42526e;
    font-size: 14px;
    line-height: 1.5;
    letter-spacing: 1px;
    margin-left: 50px;
    margin-top: 20px;
`

const Browse = styled.div`
    font-weight: 700;
    color: #42526e;
    font-size: .75rem;
    line-height: 1.5;
    letter-spacing: 1px;
    margin-left: 50px;
    margin-top: -80px;
`
const Ru = styled.div`
    color: #42526e;
    font-size: 15px;
    margin-top: 5px;
`
const Ge = styled.div`
    color: #42526e;
    font-size: 1rem;
    font-weight: 500;
`
const Agile1 = styled.div`
    width: 300px;
    height: 200px;
    display: flex;
    flex-direction: column;
    margin-left: 50px;
    margin-top: -110px;
`
const Agile = styled.div`
    width: 300px;
    height: 200px;
    display: flex;
    flex-direction: column;
    margin-left: 50px;
    margin-top: 10px;
`
const Brow = styled.h2`
    font-weight: 500;
    color: #42526e;
    font-size: .75rem;
    line-height: 1.5;
    letter-spacing: 1px;
    margin-left: 50px;
    margin-top: 30px;
`
const Right = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
`
const Arr = styled.div`
    color: #253858;
    display: flex;
    font-size: 15px;
`
const Mark = styled.div`
    color: #253858;
    display: flex;
    align-items: center;
    font-weight: 700;
    margin-top: 10px;
    :hover{
        color: #0052cc;
    }
`
const Be = styled.div`
    width: 800px;
    display: flex;
    flex-direction: column;
`
const Li = styled.div`
    height: 1px;
    width: 800px;
    background-color: gray;
    margin-top: 30px;
`
const Pr = styled.div`
    display: flex;
    margin-left: 450px;
    color: #253858;
`
const Ino = styled.div`
    font-size: 12px;
    color: #253858;
`
const NewT = styled.div`
    color: #253858;
    display: flex;
    margin-top: 20px;
    margin-left: 5px;
    align-items: center;
    font-weight: 700;
    :hover{
        color: #0052cc;
    }
`
const New = styled.div`
    width: 740px;
    background-color: red;
    /* margin-bottom: 50px; */
    display: flex;
`

const Imagese = styled.img`
    
`
const Bub = styled.div`
    margin-top: 20px;
    margin-left: -20px;
`

const Wrap = styled.div`
    width: 95%;
    display: flex;
    background-color: pink;
    flex-direction: column;
    justify-content: center;
`

const NewH = styled.div`
    width: 100%;
    height: 50%;
    justify-content: center;
    display: flex;
    flex-direction: column;
`
const Box = styled.div`
    width: 800px;
    height: 180px;
    background-color: #DEEBFF;
    display: flex;
    flex-direction: column;
    margin-top: 25px;
    border-radius: 5px;
`
const Icons = styled.div`
    color: #0052cc;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5px;
    margin-left: 10px;
    :hover{
        text-decoration: underline;
    }
`

const Bot = styled.div`
    color: #0052cc;
    display: flex;
    font-family: Charlie Text, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Noto Sans, Ubuntu, Droid Sans, Helvetica Neue, sans-serif;
    cursor: pointer;
    margin-top: 10px;
`
const Down = styled.div`
    color: #253858;
    font-size: 15px;
`
const Ups = styled.div`
    color: #253858;
    display: flex;
    align-items: center;
    font-weight: 700;
    :hover{
        color: #0052cc;
    }
`
const TextHold = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: -15px;
`
const Images = styled.img`
    height: 60px;
`
const Logo = styled.div`
    width: 25%;
`
const Up = styled.div`
    width: 100%;
    display: flex;
    height: 50%;
    align-items: center;
`

const Side = styled.div`
    width: 50%;
    display: flex;
    height: 100%;
    flex-direction: column;
`
const Card = styled.div`
    width: 800px;
    height: 180px;
    display: flex;
    margin-top: 20px;
`
const Top = styled.h4`
    font-weight: 500;
    color: #42526e;
    font-size: .75rem;
    line-height: 1.5;
    letter-spacing: 1px;
    margin: 0;
`

const Left = styled.div`
    width: 70%;
    height: 95%;
    display: flex;
    flex-direction: column;
    border-right: 1px solid gray;
    margin-top: 29px;
`

const Wrapper = styled.div`
    width: 90%;
    display: flex;
`

const Container = styled.div`
    position: absolute;
    width: 100%;
    height: 87vh;
    background-color: white;
    top: 85px;
    display: flex;
    justify-content: center;
    border-top: 1px solid gray;
`