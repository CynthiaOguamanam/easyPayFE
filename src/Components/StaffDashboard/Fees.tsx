import { useQuery } from "@tanstack/react-query";
import React, {useState} from "react";
import styled from "styled-components";

import { getAllClients, getOneStaff } from "../api/staffEndpoints";
import { UseAppSelector } from "../Global/Store";
import { AiOutlineHome } from "react-icons/ai"

import { NavLink } from "react-router-dom";


const Recent = () => {

  const user = UseAppSelector((state) => state.Client);
  const getOneClient = useQuery({
    queryKey: ["singleStaff"],
    queryFn: () => getOneStaff(user?._id),
  });

//totalBal
  return (
    <Container>
          <Top><h3>School Fees</h3></Top>
          
            {getOneClient?.data?.data?.schoolFeesPlan.map((props:any) =>(

  <Box>
              <p>Total Balance</p>
              <h3>{props?.totalBal}</h3>
              <Div></Div>
              <Down>
                  <AiOutlineHome />
          <NavLink to="/payment" style={{textDecoration: "none"}}>
            <p>Withdraw</p>
                  </NavLink>
              </Down>
          </Box>
                    ))
                  }
          <Transact>
              <Up>Transaction</Up>
              <Buttonhold>
                  <Buttons>Credit</Buttons>
                  <Buttons2>Debit</Buttons2>
              </Buttonhold>
              <Div></Div>
              <Last>No transactions to display for now</Last>
          </Transact>
    </Container>
  );
};

export default Recent;
const Last = styled.div`
    font-size: 15px;
    margin-top: 30px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Buttons2 = styled.div`
    width: 75px;
    height: 30px;
     display: flex;
     font-size: 15px;
     margin-left: 13px;
    justify-content: center;
    align-items: center;
    background-color: #EF7914;
    color: #fff;
    border-radius: 7px;
`
const Buttons = styled.div`
    width: 75px;
    height: 30px;
     display: flex;
     font-size: 15px;
    justify-content: center;
    align-items: center;
    background-color: #EF7914;
    color: #fff;
    border-radius: 7px;
`
const Buttonhold = styled.div`
    display: flex;
    align-items: center;
    margin-top: 30px;
   
`
const Up = styled.div`
    font-size: 14px;
    font-weight: 500;
   
`
const Transact = styled.div`
    width: 500px;
    display: flex;
    height: 300px;
    border: 1px solid #d7d7d7;
    border-radius: 12px;
    flex-direction: column;
     padding-left: 30px;
     /* background-color: red; */
     padding-top: 20px;
    margin-top: 40px;
    @media screen and (max-width: 500px){
      width: 355px;
    }
`
const Down = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #9c9c9c;
    font-size: 24px;
    margin-top: 30px;
    p{
        color: #d7d7d7;
        margin-left: 17px;
        cursor: pointer;
    }
`
const Div = styled.div`
    width: 100%;
    height: 1px;
    background-color: #d7d7d7;
    margin-top: 20px;
`
const Box = styled.div`
    width: 350px;
    height: 170px;
    display: flex;
    justify-content: center;
    border: 1px solid #d7d7d7;
    border-radius: 12px;
    margin-top: 40px;
    flex-direction: column;
    padding-left: 20px;
    h3{
        color: #EF7914;
        margin: 0;
        font-size: 27px;
    }
    p{
        color: #9b9b9b;
        font-size: 14px;
        margin: 0;
    }
`
const Top = styled.div`
  h3 {
    margin: 0;
    font-size: 27px;
    color: #8b8b8b;
  }
`;

const Container = styled.div`
  width: 93%;
  display: flex;
  height: 100%;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 30px;
  margin-top: 30px;
  flex-direction: column;
  background-color: #fff;
  /* background-color: black; */
  margin-left: 260px;
  @media screen and (max-width: 500px) {
    padding: 20px;
  }
  @media screen and (max-width: 1024px) {
    margin-left: 0px;
  }
`;
