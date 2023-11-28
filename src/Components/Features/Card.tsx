import React from 'react'
import styled from 'styled-components'
// import chat from "../Assets/card-hover.png"

interface props{
    title:string;
    sub:any;
    img:string
}

const Card:React.FC<props> = ({title,sub,img}) => {
  return (
    <div>
        <Container>
            <Wrapper>
                <First>
                    <Title>{title}</Title>
                    <Sub>{sub}</Sub>
                </First>
             
                    <Img src={img}/>
                   
              
            </Wrapper>
        </Container>
    </div>
  )
}

export default Card
const Img = styled.img`
height:40%;
width:25%;
object-fit: cover;
/* margin-right: 10px; */

@media screen and (max-width:500px) {
    height: 30%;
    width: 30%;
    object-fit: cover;
    margin-top: -160px;
}
`

const Sub = styled.div`
font-size: 15px;
color: grey;
display: flex;
align-items: center;
justify-content: center;    
width:95%;
margin: 10px;
`

const Title = styled.div`
margin: 5px;
font-size: 23px;
font-weight: 600;
display: flex;
width: 100%;
text-align: center;
justify-content: center;

@media screen and (max-width:500px) {
    padding-top: 10px;
}
`

const Second  = styled.div`
margin-bottom: 40px;
`

const First  = styled.div`
/* text-align: right; */
margin-right: 10px;
line-height: 20px;
display: flex;
/* align-items: center; */
/* justify-content: center; */
height: 100%;
flex-direction: column;
`

const Wrapper  = styled.div`
display: flex;
align-items: center;
justify-content: center;
`

const Container  = styled.div`
display: flex;
/* background-color: red; */
height: 190px;
width: 330px;
margin: 30px;
box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
cursor: pointer;

:hover{
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
}

@media screen and (max-width:500px) {
    width: 280px;
    height: 270px;
}
`