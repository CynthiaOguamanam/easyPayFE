import React from "react";
import styled from "styled-components";
import {AiFillCheckSquare} from "react-icons/ai";
import { IoMdAperture } from "react-icons/io";
import { FiGitPullRequest, FiLoader } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";
import demopic from "../Assets/gateway.png"

const Gateway = () =>{
    return(
        <Container>
            <Wrapper>
                <Left>
                    <H1>Effortless Payment Solutions for Your Business</H1>
                    <p style={{color: "#363636"}}>Lorem ipsum dolor sit amet consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa cum sociis natoque penatibus et magnis dis. Lorem ipsum dolor sit amet consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa cum sociis natoque penatibus et magnis dis.</p>
                    <Wrap>
                        <Minwrap>
                            <AiFillCheckSquare style={{color: "#ff0099", backgroundColor: "white"}}/>
                            <span>Comprehensive Financial Planning</span>
                        </Minwrap>
                        <Minwrap>
                            <AiFillCheckSquare  style={{color: "#21212d", backgroundColor: "white"}} />
                            <span>Personalized Approach</span>
                        </Minwrap>
                        <Minwrap>
                            <AiFillCheckSquare style={{color: "#ff0099", backgroundColor: "white"}}/>
                            <span>Investment Management</span>
                        </Minwrap>
                    </Wrap>
                    <Button>About us</Button>
                </Left>
                <Right>
                    <BoxWrap>
                        <Wrap2>
                            <Platform>
                                <Box> <IoMdAperture/> </Box>
                                <span>Platform Payment</span>
                            </Platform>
                        </Wrap2>
                        <Wrap3>
                        <Platform>
                                <Box><FiGitPullRequest/></Box>
                                <span>Platform Payment</span>
                            </Platform>
                        </Wrap3>
                        <Wrap4>
                        <Platform>
                                <Box><FiLoader/></Box>
                                <span>Platform Payment</span>
                            </Platform>
                        </Wrap4>
                    </BoxWrap>
                    <DemoWrap>
                        <DemoBox>
                            <BoxB><FaPlay/></BoxB>
                            <PHold>
                                <h3>Play Our Demo</h3>
                                <span>Phasellus viverra nulla ut.</span>
                            </PHold>
                        </DemoBox>
                        <DemoPic src={demopic} alt="demo_hero_image" />
                    </DemoWrap>
                </Right>
            </Wrapper>
        </Container>
    )
};

export default Gateway;

const Container = styled.div`
width: 100%;
height: 100vh;
background-color: #aacbeb87;
display: flex;
justify-content: center;
align-items: center;
margin:100px 0 50px 0;

@media Screen and (max-width: 768px){
    height: auto;
}
`;

const Wrapper = styled.div`
width: 90%;
height: 95%;
/* background-color: red; */
display: flex;
justify-content: space-between;
align-items: center;

@media Screen and (max-width: 768px){
    flex-direction: column;
    width: 100%;
}
`;
const Left = styled.div`
width: 45%;
height: 100%;
/* background-color: red; */
display: flex;
flex-direction: column;
justify-content: center;
p{
    font-weight: 500;
}

@media Screen and (max-width: 768px){
    width: 90%;
    height: auto;
}

`;

const H1 = styled.h1`
font-size: 45px;
color: #21212d;

`;
const Wrap = styled.div`
height: 10%;
display: flex;
flex-direction: column;
justify-content: space-between;
/* background-color: #ff9500; */
margin: 20px 0 30px 0;
`;
const Minwrap = styled.div`
/* background-color: #00ff48; */
display: flex;
justify-content: flex-start;
align-items: center;

span{
    font-weight: bold;
    margin-left: 8px;
}

`;
const Right = styled.div`
width: 50%;
height: 90%;
display: flex;
flex-direction: column;
justify-content: flex-end;
/* background-color: #363636; */

@media Screen and (max-width: 768px){
    width: 90%;
    height: 500px;
}
@media Screen and (max-width: 500px){
    width: 90%;
    height: auto;
}


`;

const Button = styled.button`
width: 180px;
padding: 15px 25px;
border: none;
/* background-color: #000; */
/* background-color: #ff0099; */
background-color: #0073ff;
;
border-radius: 6px;
font-size: 15px;
color: #fff;
/* color: #363636; */
cursor: pointer;
font-weight: bold;
:hover{
    color: #ffffff;
    transition: 1s;
    transform: scale(1.05);
    /* background-color: #0073ff; */
    background-color: #ff0099;
}
`;

const BoxWrap = styled.div`
width: 55%;
height: 50%;
display: flex;
flex-direction: column;
justify-content: space-between;
/* background-color: green; */
margin-top: 30px;

@media Screen and (max-width: 768px){
    height: 60%;
}
@media Screen and (max-width: 500px){
   width: 100%;
   height: 300px;
}
`;
const DemoWrap = styled.div`
width: 100%;
height: 40%;
margin-top: 30px;
/* background-color: red; */
display: flex;
/* justify-content: center; */
align-items: center;
@media Screen and (max-width: 768px){
    height: 50%;
}
`;
const Wrap2 = styled.div`
width: 100%;
height: 30%;
/* background-color: purple; */
display: flex;
justify-content: flex-end;
align-items: center;
`;
const Wrap3 = styled.div`
width: 100%;
height: 30%;
/* background-color: purple; */
display: flex;
justify-content: center;
align-items: center;
`;
const Wrap4 = styled.div`
width: 100%;
height: 30%;
/* background-color: purple; */
display: flex;
justify-content: flex-start;
align-items: center;
`;

const Platform = styled.div`
width: 70%;
height: 75%;
display: flex;
justify-content: space-around;
align-items: center;
background-color: #0073ff;
border-radius: 1rem;
padding: 5px 5px 5px 15px;
transition: 1s;
color: white;


:hover{
    margin-right: 13px;
    transition: 400ms;
}

`;
const Box = styled.div`
width: 50px;
height: 50px;
background-color: #ff0099b4;
display: flex;
justify-content: center;
align-items: center;
border-radius: 1rem;
margin-right: 5px;
font-size: 25px;
`;

const DemoBox = styled.div`
width: 100%;
height: 60%;
background: linear-gradient(90deg, #0073ff, #ff0099);
border-radius: 1rem;
padding: 0 0 0 25px;
display: flex;
justify-content: flex-start;
align-items: center;

@media Screen and (max-width: 768px){
    height: 90%;
}

@media Screen and (max-width: 500px){
    position :absolute;
    width: 75%;
    height: 130px;
    z-index: 1;
    margin-top: 420px;
}
`;
const DemoPic = styled.img`
position: absolute;
width: 300px;
right: 60px;
margin-bottom: 405px;

@media Screen and (max-width: 768px){
    width: 200px;
    margin-bottom: 198px;
}
@media Screen and (max-width: 500px){
    right: 0;
    position: relative;
    width: 300px;
}
`;
const BoxB = styled.div`
width: 90px;
height: 90px;
background-color: #ff0099;
display: flex;
justify-content: center;
align-items: center;
border-radius: 1rem;
font-size: 25px;
color: white;

@media Screen and (max-width: 500px){
    height: 40%;
    width: 35%;
font-size: 15px;

}
`;

const PHold = styled.div`
margin-left: 10px;
color: white;
`;

// ff9500