import React from 'react'
import styled from 'styled-components'

interface Props {
    st: string
    up: string
    gr: string
    bu: string
    gt: string
    ent: string
    ln: string
    iv: string
    by: string
    sf: string
    pl: string
    ma: string
    br: string
    hr: string
    se: string
    le: string
    op: string
    ope: string
    ru: string
    it: string
    pro: string
    fi: string
    sim: string
    inn: string
    ress: string
    mar: string
    app: string
    Dev: string
    Doc: string
    tru: string
    com: string
    wrk: string
    sto: string
    bse: string
}

const Teams: React.FC<Props> = ({st, up, gr, bu, gt, ent, ln, iv, by, sf, pl, ma, br, hr, se, le, op, bse, ope,
ru, it, pro, fi, sim, inn, ress, mar, app, Dev, Doc, tru, com, wrk, sto}) => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Start>
                <Top>{st}</Top>
                <Stats>
                    <Ups>{up}</Ups>
                    <P>{gr}</P>
                </Stats>
                <Stats>
                    <Ups>{bu}</Ups>
                    <P>{gt}</P>
                </Stats>
                <Stats>
                    <Ups>{ent}</Ups>
                    <P>{ln}</P>
                </Stats>
                <Last>{iv}</Last>
            </Start>

            <Start>
                <Top>{by}</Top>
                <Stats>
                    <Ups>{sf}</Ups>
                    <P>{pl}</P>
                </Stats>
                <Stats>
                    <Ups>{ma}</Ups>
                    <P>{br}</P>
                </Stats>
                <Stats>
                    <Ups>{hr}</Ups>
                    <P>{se}</P>
                </Stats>
                <Stats2>
                    <Ups>{le}</Ups>
                    <P>{op}</P>
                </Stats2>
            </Start>

             <Start>
                <Top2>{bse}</Top2>
                <Stats>
                    <Ups>{ope}</Ups>
                    <P>{ru}</P>
                </Stats>
                <Stats>
                    <Ups>{it}</Ups>
                    <P>{pro}</P>
                </Stats>
                <Stats>
                    <Ups>{fi}</Ups>
                    <P>{sim}</P>
                </Stats>
                <Stats>
                    <Ups>{inn}</Ups>
                    <P>{ress}</P>
                </Stats>
            </Start>
            <Sep></Sep>
            <Start2>
                <Stats>
                    <Ups>{mar}</Ups>
                    <P>{app}</P>
                </Stats>

                <Stats>
                    <Ups>{Dev}</Ups>
                    <P>{Doc}</P>
                </Stats>
                <Li></Li>
                <Stats>
                    <Ups>{tru}</Ups>
                    <P>{com}</P>
                </Stats>
                <Le></Le>
                <Stats>
                    <Ups>{wrk}</Ups>
                    <P>{sto}</P>
                </Stats>
            </Start2>
            </Left>
        </Wrapper>
    </Container>
  )
}

export default Teams
const Le = styled.div`
    width: 110px;
    height: 1px;
    background-color: gray;
    margin-bottom: 30px;
`
const Li = styled.div`
    width: 110px;
    height: 1px;
    background-color: gray;
    margin-top: 10px;
    margin-bottom: 30px;
`
const Sep = styled.div`
    width: 1px;
    height: 400px;
    background-color: gray;
    margin-top: 48px;
`
const Left = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`
const Last = styled.div`
    color: #42526e;
    margin-top: 70px;
`
const P = styled.div`
    font-size: 13px;
    margin-top: 2px;
    color: #42526e;
`
const Ups = styled.h4`
    color: #42526e;
    margin: 0;
    cursor: pointer;
    :hover{
        color: #0052cc;
    }
`
const Stats2 = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`
const Stats = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`
const Top2 = styled.h2`
    font-weight: 500;
    color: #42526e;
    font-size: .75rem;
    line-height: 1.5;
    letter-spacing: 1px;
    margin-bottom: 16px;
    visibility: hidden;
`
const Top = styled.h2`
    font-weight: 500;
    color: #42526e;
    font-size: .75rem;
    line-height: 1.5;
    letter-spacing: 1px;
    margin-bottom: 16px;
`
const Start2 = styled.div`
    width: 270px;
    height: 330px;
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    margin-left: 60px;
`

const Start = styled.div`
    width: 270px;
    height: 330px;
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    
`

const Wrapper = styled.div`
    display: flex;
    height: 100%;
    width: 90%;
    hr{
        height: 350px;
        margin-right: 380px;
        margin-top: 50px;
    }
`
const Container = styled.div`
    width: 100%;
    display: flex;
    background-color: white;
    height: 70vh;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    border-top: 1px solid gray;
    position: absolute;
    top: 85px;
    justify-content: center;
`