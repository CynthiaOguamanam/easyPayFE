import React from 'react'
import styled from 'styled-components'
import { AiFillLock } from "react-icons/ai"
import { CiWallet } from "react-icons/ci"
import img from "../Assets/payk.png"
import img2 from "../Assets/visa.png"

const Withdraw = () => {
  return (
      <Container>
          <Box>
              <Lockhold>
                  <Lock><AiFillLock /></Lock>
                  <P>Secured by Korapay</P>
              </Lockhold>
              <Hold>
                  <Text>TEST MODE</Text>
                  <Check>
                      <Icon><CiWallet /></Icon>
                      <Pay><h3>Pay NGN 1,000.00</h3></Pay>
                      <Enter>Enter your card information to complete this payment</Enter>
                      <Details>
                          <Number>Account Number</Number>
                          <Inputhold>
                              <Input type="number" placeholder='5188 5136 1855 2975' />
                          </Inputhold>

                         <Number>Bank Name</Number>
                          <Inputhold>
                              <Input type="text" placeholder='Fidelity bank' />
                          </Inputhold>

                          <Number>Amount</Number>
                          <Inputhold>
                              <Input type="number" placeholder='$500' />
                          </Inputhold>

                      </Details>
                      <Button><Icons><AiFillLock /></Icons> <Ngn>Pay NGN 1,000.00</Ngn></Button>
                  </Check>
              </Hold>
              <Last><Img3 src={ img2} /></Last>
          </Box>
    </Container>
  )
}

export default Withdraw
const Img3 = styled.img`
    
`
const Last = styled.div`
    margin-top: 7px;
`
const Ngn = styled.div`
    color: #fff;
    font-weight: 500;
    font-size: 15px;
    margin-left: 10px;
`
const Icons = styled.div`
    color: #fff;
    font-size: 20px;
`
const Button = styled.button`
    width: 84%;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #48ceb0;
    color: #fff;
    border: none;
    outline: none;
    border-radius: 10px;
    margin-top: 10px;
    cursor: pointer;
`
const Cvv = styled.div`
    margin-left: 75px;
`
const Img = styled.img`
    
`
const Inputhold = styled.div`
    display: flex;
    align-items: center;
    background-color: #fff;
    height: 40px;
    overflow: hidden;
    border: 1px solid #f1f1f1;
    border-radius: 10px;
    margin-top: 12px;
    margin-bottom: 20px;
    hr{
        height: 100%;
    }
`
const Input2 = styled.input`
    padding-left: 15px;
    border: none;
    outline: none;
    height: 100%;
    width: 50%;
`
const Input = styled.input`
    padding-left: 15px;
    border: none;
    outline: none;
    height: 100%;
    flex: 1;
`
const Number2 = styled.div`
    font-size: 13px;
    margin-top: 30px;
    display: flex;
`
const Number = styled.div`
    font-size: 13px;
`
const Details = styled.div`
    width: 290px;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    background-color: #cfe7e2;
    padding: 15px;
    margin-top: 30px;
`
const Enter = styled.div`
    font-weight: 600;
    text-align: center;
    width: 330px;
    font-size: 13px;
    margin-top: 35px;
`
const Pay = styled.div`
    h3{
        margin: 0;
    }
`
const Icon = styled.div`
    font-size: 27px;
    color: #a19f9f;
`
const Check = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    margin-top: 5px;
    background-color: #fff;
    padding-top: 25px;
    align-items: center;
    padding-bottom: 70px;
`
const Text = styled.div`
    font-size: 11px;
    font-weight: 500;
    color: #fff;
`
const Hold = styled.div`
    width: 370px;
    display: flex;
    border-radius: 15px;
    padding-top: 5px;
    background-color: rgb(255, 166, 58);
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin-top: 15px;
`
const P = styled.div`
    margin-left: 5px;
    font-size: 12px;
    font-weight: 400;
`
const Lock = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #48ceb0;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
`
const Lockhold = styled.div`
    display: flex;
    align-items: center;
`

const Box = styled.div`
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
`

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f1f1f1;
`