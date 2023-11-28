import { useQuery } from "@tanstack/react-query";
import React from "react";
import styled from "styled-components";
import img from "../Assets/21.jpeg";
import { getAllClients, getOneStaff } from "../api/staffEndpoints";
import { UseAppSelector } from "../Global/Store";
import {AiOutlineHome} from "react-icons/ai"



const Rentals = () => {

  const user = UseAppSelector((state) => state.Client);

  const getOneClient = useQuery({
    queryKey: ["singleStaff"],
    queryFn: () => getOneStaff(user?._id),
  });
  console.log(user);
  return (
    <Container>
          <Top><h3> House Rents</h3></Top>
          {getOneClient?.data?.data?.houseRentPlan?.map((props:any) => (

 
          <Box>
            
              <p>Total Balance</p>
              <h3>{props?.totalBal}</h3>
              <Div></Div>
              <Down>
                  <AiOutlineHome />
                  <p>Withdraw</p>
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

export default Rentals;
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
    background-color: #39A081;
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
    background-color: #39A081;
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
     padding-top: 20px;
    margin-top: 40px;
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
        color: #39A081;
        margin: 0;
        font-size: 27px;
    }
    p{
        color: #9b9b9b;
        font-size: 14px;
        margin: 0;
    }
`
const Button = styled.div`
  width: 120px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-color: #03993f;
  border-radius: 50px;
  cursor: pointer;
`;
const View = styled.div`
  width: 100%;
  display: flex;
  margin-top: 30px;
  justify-content: center;
  align-items: center;
`;
const Joined = styled.div``;
const Role = styled.div`
  width: 200px;
  /* background-color: green; */
  margin-right: 90px;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 500px) {
    background-color: red;
    margin-right: 12px;
    /* margin-left: 30px; */
    width: 0px;
  }
`;
const Img = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
`;
const Name = styled.div`
  display: flex;
  margin-left: 10px;
  @media screen and (max-width: 500px) {
    width: 50px;
    /* background-color: red; */
  }
`;
const Circle = styled.div`
  width: 45px;
  height: 45px;
  border: 1px solid #fff;
  /* background-color: red; */
  display: flex;
  /* justify-content */
  align-items: center;
  border-radius: 50px;
  overflow: hidden;
  @media screen and (max-width: 500px) {
    width: 40px;
    height: 40px;
    border-radius: 50px;
  }
`;
const Profilehold = styled.div`
  display: flex;
  align-items: center;
`;
const Hold = styled.div`
  height: 40px;
  width: 100%;
  display: flex;
  margin-top: 10px;
  justify-content: space-between;
  background-color: blue;
  align-items: center;
`;
const Navs2 = styled.div`
  color: #5a5a5a;
  font-size: 18px;
`;
const Navs = styled.div`
  color: #fff;
  font-size: 18px;
  cursor: pointer;
`;
const Head2 = styled.div`
  background-color: #f6f7f9;
  height: 80px;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  display: flex;
  /* height: 100%; */
  /* height: 60px; */
  padding-left: 10px;
  padding-right: 10px;
`;
const Head = styled.div`
  margin-top: 15px;
  justify-content: space-between;
  background-color: #0d71fa;
  align-items: center;
  display: flex;
  height: 70px;
  padding-left: 15px;
  padding-right: 15px;
  position: sticky;
  border-radius: 10px;
`;
const Boxhold = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;

  background-color: red;
`;
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
