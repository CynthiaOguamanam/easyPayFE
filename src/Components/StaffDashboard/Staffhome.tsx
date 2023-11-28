import React, { useState } from "react";
import styled from "styled-components";
import img from "../Assets/person.png";
import Staffcards from "./Staffcards";
import Plans from "./Plans";
import { FaGoogleWallet } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { UseAppSelector } from "../Global/Store";
import { useQuery } from "@tanstack/react-query";
import { getOneAdmin } from "../api/adminEndpoints";
import { getOneStaff } from "../api/staffEndpoints";

const Home = () => {
  const [show, setShow] = useState(false);

  const Toggle = () => {
    setShow(!show);
  };

  const Toggle2 = () => {
    setShow(false);
  };

  const user = UseAppSelector((state) => state.Client);
  const getStaff = useQuery({
    queryKey: ["singleStaff"],
    queryFn: () => getOneStaff(user?._id),
  });
  console.log("this is getStaff", getStaff);

  return (
    <Container>
      <Wrapper>
        <br />
        <br />
        <Top>
          <Left>
            <Bold>Dashboard</Bold>
            <button onClick={Toggle}>Staff details</button>
          </Left>
          {show ? (
            <Slidein>
              <Wallets>
                <Icon onClick={Toggle2}>
                  <MdOutlineCancel />
                </Icon>
                <Card2>
                  <Circle>
                    <FaGoogleWallet />
                  </Circle>
                  {getStaff?.data?.data?.wallet.map((el: any) => (
                    <Wallet key={el?._id}>
                      <p>Wallet Balance</p>
                      <h3>{el.balance}</h3>
                    </Wallet>
                  ))}
                </Card2>

                <Tap>
                  <h3>Staff Details: </h3>
                  <p>
                    Wallet number: <strong>{user?.walletNumber}</strong>
                  </p>
                </Tap>

                <Tap2>
                  <p>
                    Staff name: <strong>{user?.yourName}</strong>
                  </p>
                </Tap2>

                <Holder>
                  <NavLink to="/payout" style={{ textDecoration: "none" }}>
                    <button>Withdraw to bank</button>
                  </NavLink>
                </Holder>
              </Wallets>
            </Slidein>
          ) : null}
        </Top>
        <br />
        <br />
        <Staffcards />
        <Plans />
      </Wrapper>
    </Container>
  );
};

export default Home;
const Holder = styled.div`
  display: flex;
  margin-top: 90px;
  button {
    width: 160%;
    height: 50px;
    background-color: #3184f7;
    color: #fff;
    border-radius: 5px;
    border: none;
    outline: none;
    margin-top: 60px;
    cursor: pointer;
    margin-right: 10px;
  }
`;
const Icon = styled.div`
  position: absolute;
  font-size: 25px;
  top: 15px;
  cursor: pointer;
`;
const Input = styled.input`
  height: 40px;
  padding-left: 15px;
  border-radius: 7px;
  outline-color: #39a081;
  outline-width: 3px;
  margin-top: 3px;
  border: 1px solid gray;
`;
const Tap2 = styled.div`
  h3 {
    margin: 0;
    font-size: 19px;
    font-weight: 500;
  }
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  p {
    margin: 0;
    font-size: 13px;
    font-weight: 500;
  }
  strong {
    font-size: 16px;
    margin-left: 15px;
  }
`;
const Tap = styled.div`
  h3 {
    margin: 0;
    font-size: 19px;
    font-weight: 500;
  }
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  p {
    margin: 0;
    font-size: 13px;
    font-weight: 500;
    margin-top: 30px;
  }
  strong {
    font-size: 16px;
    margin-left: 15px;
  }
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
const Card2 = styled.div`
  width: 300px;
  height: 150px;
  margin-top: 30px;
  background-color: #0d71fa;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding-left: 15px;
`;
const Wallet = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 18px;
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
const Wallets = styled.div`
  width: 330px;
  height: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Slidein = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  z-index: 12345;
  position: fixed;
  justify-content: flex-end;
  animation: slide-in 0.5s ease-out;

  @keyframes slide-in {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }
`;

const Bold = styled.div`
  font-size: 20px;
  font-weight: 600;
`;
const Left = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
const Wrapper = styled.div`
  width: 92%;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  padding-top: 90px;
`;
const Top = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  button {
    width: 130px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0d71fa;
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    cursor: pointer;
    color: #fff;
    position: relative;
    border: none;
    outline: none;
  }
`;
const Container = styled.div`
  width: calc(100% - 19%);
  display: flex;
  justify-content: center;
  margin-left: 260px;
  overflow: hidden;
  @media screen and (max-width: 1024px) {
    width: 100%;
    margin-left: 0px;
  }
  /* background-color: red; */
`;
