import React, { useState } from "react";
import styled from "styled-components";
import { FiMenu, FiTarget, FiPower, FiUpload } from "react-icons/fi";
// import img from "../Assets/piggy.svg"
import { ImHome2 } from "react-icons/im";
import { IoIosRocket, IoMdPerson } from "react-icons/io";
import { NavLink, useNavigate } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import img from "../Assets/easy.png";
import { BsArrowRightShort } from "react-icons/bs";
import { UseAppDispatch } from "../Global/Store";
import { logoutAdmin } from "../Global/ReduxState";
import Swal from "sweetalert2";

const SideBar = () => {
  const dispatch = UseAppDispatch();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);

  const Toggle = () => {
    setShow(!show);
  };

  const Toggle2 = () => {
    setShow2(!show2);
  };
  return (
    <Container>
      <Top>
        <Img src={img} />{" "}
      </Top>
      <Home>
        <Icon2>
          <MdDashboard />
        </Icon2>
        <NavLink
          to="/dashboard"
          style={({ isActive }) => {
            return {
              textDecoration: isActive ? "none" : "none",
              color: isActive ? "#2AA7FF" : "#3e4956",
            };
          }}
        >
          <Text1>Dashboard</Text1>
        </NavLink>
      </Home>

      <Home2>
        <Icon2>
          <IoMdPerson />
        </Icon2>
        <NavLink
          to="/staffs"
          style={({ isActive }) => {
            return {
              textDecoration: isActive ? "none" : "none",
              color: isActive ? "#2AA7FF" : "#3e4956",
            };
          }}
        >
          <Text2>Staffs</Text2>
        </NavLink>
      </Home2>

      <Home2>
        <Icon2>
          <IoMdPerson />
        </Icon2>
        <Text3 onClick={Toggle}>Financials</Text3>
      </Home2>
      {show ? (
        <Staffs>
          <NavLink to="/payroll" style={{ textDecoration: "none" }}>
            <p>Send Payment</p>
          </NavLink>
        </Staffs>
      ) : null}
      <Home2>
        <Icon2>
          <IoMdPerson />
        </Icon2>
        <NavLink
          to="/transaction"
          style={({ isActive }) => {
            return {
              textDecoration: isActive ? "none" : "none",
              color: isActive ? "#2AA7FF" : "#3e4956",
            };
          }}
        >
          <Text3>Transaction</Text3>
        </NavLink>
      </Home2>

      <Power
        onClick={() => {
        

          const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
              confirmButton: "btn btn-success",
              cancelButton: "btn btn-danger",
            },
            buttonsStyling: false,
          });

          swalWithBootstrapButtons
            .fire({
              title: "Are you sure you want to logout?",
              icon: "warning",
              showCancelButton: true,
              confirmButtonText: "Yes, logout!",
              cancelButtonText: "No, cancel!",
              reverseButtons: true,
            })
            .then((result) => {
              if (result.isConfirmed) {
                dispatch(logoutAdmin());
                navigate("/optionsignin");
                swalWithBootstrapButtons.fire(
                  "logout successful!",
                  "logout successful.",
                  "success"
                  //   navigate("/optionsignin")
                );
              } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
              ) {
                navigate("/dashboard");
                swalWithBootstrapButtons.fire(
                  "Cancelled",
                  "still on dashboard :)",
                  "error"
                );
              }
            });
        }}
      >
        <Icon2>
          <FiPower />
        </Icon2>
        <Text>Logout</Text>
      </Power>
    </Container>
  );
};

export default SideBar;
// const Slidein = styled.div`
//   width: 100%;
//   height: 100vh;
//   background-color: rgba(0, 0, 0, 0.5);
//   position: absolute;
//   right: 0;
//   left: 0;
//   top: 0;
//   z-index: 15;
// `
const Sta = styled.div`
  font-size: 17px;
  font-family: U8, sans-serif;
  cursor: pointer;
  /* color: #fff; */
  align-items: center;
  display: flex;
  margin-left: 40px;
  width: 410px;
  height: 40px;
  margin-bottom: 8px;
  /* margin-bottom: 10px; */
  /* background-color: green; */
`;
const Staffs = styled.div`
  width: 100%;
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  p {
    margin-left: 40px;
  }
`;
const Ico = styled.div`
  font-size: 20px;
  margin-left: 100px;
  margin-top: 5px;
`;
const Img = styled.img`
  height: 30px;
`;
const Power = styled.div`
    display: flex;
    align-items: center;
    margin-top: 230px;
`;

const Text5 = styled.div`
  font-size: 17px;
  font-family: U8, sans-serif;
  cursor: pointer;
  /* color: #fff; */
  align-items: center;
  display: flex;
  margin-left: 30px;
  width: 120px;
  height: 40px;
  /* background-color: white; */
`;
const Text4 = styled.div`
  font-size: 17px;
  font-family: U8, sans-serif;
  cursor: pointer;
  color: #fff;
  align-items: center;
  display: flex;
  margin-left: 30px;
  width: 120px;
  height: 40px;
  /* background-color: white; */
`;
const Text3 = styled.div`
  font-size: 17px;
  font-family: U8, sans-serif;
  cursor: pointer;
  /* color: #fff; */
  align-items: center;
  display: flex;
  margin-left: 15px;
  width: 410px;
  height: 40px;
  /* margin-bottom: 10px; */
  /* background-color: green; */
`;
const Text2 = styled.div`
  font-size: 17px;
  font-family: U8, sans-serif;
  cursor: pointer;
  /* color: #fff; */
  align-items: center;
  display: flex;
  margin-left: 15px;
  width: 410px;
  height: 40px;
  /* margin-bottom: 10px; */
  /* background-color: green; */
`;
const Text = styled.div`
  font-size: 17px;
  font-family: U8, sans-serif;
  cursor: pointer;
  /* color: #fff; */
  align-items: center;
  display: flex;
  margin-left: 30px;
  width: 120px;
  height: 40px;
  /* background-color: white; */
`;

const Text1 = styled.div`
  font-size: 17px;
  font-family: U8, sans-serif;
  cursor: pointer;
  /* color: #fff; */
  align-items: center;
  display: flex;
  margin-left: 15px;
  width: 210px;
  height: 40px;
  /* margin-bottom: 10px; */
  /* background-color: white; */
`;
const Icon2 = styled.div`
  color: #3e4956;
  font-size: 23px;
  cursor: pointer;
`;
const Home2 = styled.div`
  width: 100%;
  display: flex;
  margin-top: 25px;
  align-items: center;
`;
const Home = styled.div`
  width: 100%;
  display: flex;
  margin-top: 70px;
  align-items: center;
`;
const Image = styled.img`
  height: 25px;
  margin-left: 30px;
`;
const Icon = styled.div`
  color: #fff;
  font-size: 25px;
  width: 100%;
  h3 {
    text-align: center;
    margin: 0;
    margin-left: -20px;
  }
`;
const Top = styled.div`
  display: flex;
  width: 100%;
  margin-top: 50px;
`;
const Container = styled.div`
  width: 17%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f2f5f8;
  padding-left: 25px;
  position: fixed;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  /* border-top-right-radius: 120px; */
  z-index: 2;
  overflow: hidden;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;
