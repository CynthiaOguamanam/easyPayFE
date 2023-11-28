import React, { useState } from "react";
import styled from "styled-components";
import { FaGoogleWallet } from "react-icons/fa";
import { MdSchool } from "react-icons/md";
import { BsBusFrontFill, BsHousesFill } from "react-icons/bs";
import { UseAppSelector } from "../Global/Store";
import { useQuery } from "@tanstack/react-query";
import { getOneAdmin } from "../api/adminEndpoints";
import { BiMoney } from "react-icons/bi"
import {SiExpensify} from "react-icons/si"
import { getOneStaff } from "../api/staffEndpoints";

const Cards = () => {
  const staff = UseAppSelector((state) => state.Client);

  const getStaff = useQuery({
    queryFn: () => getOneStaff(staff?._id),
    queryKey: ["getOneStaff"],
  });



  return (
    <Container>
      <Boxhold>
        <Card>
          <Circle>
            <FaGoogleWallet />
          </Circle>
          {
getStaff?.data?.data?.wallet?.map((el:any)=>(
  <Wallet key ={el?._id}>
  <p>Balance</p>
  <h3>{el?.balance}</h3>
</Wallet>
))
          }
       
        </Card>

        <Card2>
          <Circle2>
            <BiMoney />
          </Circle2>
          <Wallet>
            <p>Wallet Number</p>
            <h3> {staff?.walletNumber} </h3>
          </Wallet>
        </Card2>

        <Card3>
          <Circle4>
            <SiExpensify />
          </Circle4>
          <Wallet>
            <p>Expenses</p>
            <h3>$0.00</h3>
          </Wallet>
        </Card3>

        {/* <Card2>
                  <Circle2>
                      <MdSchool />
                  </Circle2>
                  <Wallet>
                      <p>School Fees</p>
                      <h3>$000.00</h3>
                  </Wallet>
              </Card2> */}

        {/* <Card3>
                  <Circle3>
                      <BsBusFrontFill />
                  </Circle3>
                  <Wallet>
                      <p>Travel & Tour</p>
                      <h3>$000.00</h3>
                  </Wallet>
              </Card3> */}

        {/* <Card4>
                  <Circle4>
                      <BsHousesFill />
                  </Circle4>
                  <Wallet>
                      <p>Rents</p>
                      <h3>$000.00</h3>
                  </Wallet>
              </Card4> */}
      </Boxhold>
    </Container>
  );
};

export default Cards;
const Spend = styled.div``;
const Wallet = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 18px;
  margin-bottom: 10px;
  margin-top: 15px;
  p {
    color: #fff;
    margin: 0;
  }
  h3 {
    color: #fff;
    margin-top: 5px;
    font-size: 23px;
  }
`;
const Circle4 = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background-color: #82d1b9;
  color: #fff;
  font-size: 30px;
`;
const Circle3 = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background-color: #8856dd;
  color: #fff;
  font-size: 30px;
`;
const Circle2 = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background-color: #f7a156;
  color: #fff;
  font-size: 30px;
`;
const Circle = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background-color: #3184f7;
  color: #fff;
  font-size: 30px;
`;
const Card4 = styled.div`
  width: 230px;
  height: 150px;
  background-color: #39a081;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding-left: 15px;
`;
// const Card3 = styled.div`
//     width: 330px;
//     box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
//     border-top-left-radius: 10px;
//     border-top-right-radius: 10px;
//     border-bottom-right-radius:10px;
//     background-color: #39A081;
//     display: flex;
//     cursor: pointer;
//     padding-left: 15px;
//     padding-top: 15px;
// `
const Card3 = styled.div`
  width: 310px;
  height: 150px;
  background-color: #39a081;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  margin-left: 15px;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding-left: 15px;
  @media screen and (max-width: 1024px) {
    margin-top: 15px;
  }
`;
const Card2 = styled.div`
  width: 310px;
  height: 150px;
  background-color: #ef7914;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  margin-left: 15px;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding-left: 15px;
`;

const Card = styled.div`
  width: 310px;
  height: 150px;
  background-color: #0d71fa;
  margin-bottom: 17px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding-left: 15px;
`;
const Boxhold = styled.div`
  width: 100%;
  display: flex;
  /* justify-content: space-between; */
  margin-top: 15px;
  flex-wrap: wrap;
  @media screen and (max-width: 1024px) {
    display: flex;
    justify-content: center;
    /* background-color: red; */
  }
  @media screen and (max-width: 500px) {
    display: flex;
    justify-content: center;
    /* background-color: red; */
  }
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  /* @media screen and (max-width: 500px) {
        display
    } */
  /* position: fixed; */
`;
