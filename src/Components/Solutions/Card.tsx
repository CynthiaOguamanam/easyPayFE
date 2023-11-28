import React from "react";
import styled from "styled-components";
import {BsArrowRightShort} from "react-icons/bs"

interface BackGround {
	bg: string;
    txt: string
    pra: string
    img: string
    imge: string
    con: string
    coll: string
    tr: string
    clb: string
    imges: string
    ji: string
    bu: string
    imgess: string
}
const Card: React.FC<BackGround> = ({ bg, txt, pra, img, imge, con, coll , tr, clb, imges, ji, bu, imgess}) => {
	return <Container bg={bg}>
            <Wrapper>
                <Left>
                    <Top>{txt}</Top>
                    <Bot>{pra} <Icons><BsArrowRightShort /></Icons></Bot>
                    <Hold1>
                        <First>
                            <Start>
                                <Images src={img} />
                            </Start>
                            <Cont>
                                <Up>{con}</Up>
                                <Down>{coll}</Down>
                            </Cont>
                        </First>
                    </Hold1>
                    <Hold>
                        <First>
                            <Start>
                                <Images src={imge} />
                            </Start>
                            <Cont>
                                <Up>{tr}</Up>
                                <Down>{clb}</Down>
                            </Cont>
                        </First>
                    </Hold>
                    <Hold>
                        <First>
                            <Start>
                                <Images src={imges} />
                            </Start>
                            <Cont>
                                <Up>{ji}</Up>
                                <Down>{bu}</Down>
                            </Cont>
                        </First>
                    </Hold>
                </Left>
                <Right>
                    <Imagess src={imgess} />
                </Right>
            </Wrapper>
        </Container>;
};

export default Card;
const Imagess = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover
`
const Right = styled.div`
    width: 60%;
    display: flex;
    overflow: hidden;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Down = styled.div`
    margin-left: 25px;
    
`
const Up = styled.div`
    color: #253858;
    display: flex;
    align-items: center;
    font-weight: 700;
    margin-left: 25px;
    margin-top: 20px;
    :hover{
        color: #0052cc;
    }
`
const Cont = styled.div`
    display: flex;
    flex-direction: column;
`
const Images = styled.img`
    
`
const Start = styled.div`
    width: 80px;
    height: 100%;
`

const First = styled.div`
    width: 100%;
    height: 120px;
    display: flex;
`
const Hold1 = styled.div`
    width: 100%;
    display: flex;
    margin-top: 40px;
`
const Hold = styled.div`
    width: 100%;
    display: flex;
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
`

const Top = styled.h3`
    width: 380px;
    font-size: 1.5rem;
    line-height: 1.33333333;
    color: #253858;
    font-weight: 500;
`

const Left = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    @media screen {
        
    }
`

const Wrapper = styled.div`
    width: 87%;
    display: flex;
    height: 100%;
    margin-top: 60px;
`

const Container = styled.div<{ bg: string }>`
	width: 100%;
	background-color: ${(props) => props.bg};
	height: 120px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;