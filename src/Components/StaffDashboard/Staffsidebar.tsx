import React, {useState} from 'react'
import styled from 'styled-components'
import { FiPower} from "react-icons/fi"
// import img from "../Assets/piggy.svg"
// import {ImHome2} from "react-icons/im"
import { IoMdPerson} from "react-icons/io"
import { NavLink, useNavigate } from 'react-router-dom'
import {MdDashboard} from "react-icons/md"
import img from "../Assets/easy.png"
import { UseAppDispatch } from '../Global/Store'
import Swal from 'sweetalert2'
import { logOut } from '../Global/ReduxState'
// import {BsArrowRightShort} from "react-icons/bs"

const Staffsidebar = () => {
     const dispatch = UseAppDispatch();
  const navigate = useNavigate();
    const [show, setShow] = useState(false)

    const Toggle = () => {
        setShow(!show)
    }
  return (
    <Container>
        <Top><Img src={img} /> </Top>
        <Home>
            <Icon2><MdDashboard /></Icon2>
              <NavLink to="/staffdashboard" style={({isActive}) => {
                return {
                    textDecoration: isActive ? "none" : "none",
                    color: isActive ? "#2AA7FF" : "#3e4956",
                }
            }}>
                  <Text1>Dashboard</Text1>
                </NavLink>
        </Home>
        
            <Home2>
            <Icon2><IoMdPerson  /></Icon2>
            <Text2 onClick={Toggle}>Savings</Text2>
          </Home2>
          {show ? (
              <Staffs>
                  <NavLink to="/schoolfees" style={({isActive}) => {
                return {
                    textDecoration: isActive ? "none" : "none",
                    color: isActive ? "#2AA7FF" : "#3e4956",
                }
            }}>
                      <p>School Fees</p>
                    </NavLink>
                  <NavLink to="/travel" style={({isActive}) => {
                return {
                    textDecoration: isActive ? "none" : "none",
                    color: isActive ? "#2AA7FF" : "#3e4956",
                }
            }}>
                      <p>Travel & Tour</p>
                  </NavLink>
                  <NavLink to="/Rent" style={({isActive}) => {
                return {
                    textDecoration: isActive ? "none" : "none",
                    color: isActive ? "#2AA7FF" : "#3e4956",
                }
            }}>
                      <p>Rents</p>
                  </NavLink>
          </Staffs>
          ) : null}
          
        <Home2>
            <Icon2><IoMdPerson /></Icon2>
                  <Text3>Transaction</Text3>
        </Home2>

        <Power   onClick={() => {
        

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
                dispatch(logOut());
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
                navigate("/staffdashboard");
                swalWithBootstrapButtons.fire(
                  "Cancelled",
                  "still on dashboard :)",
                  "error"
                );
              }
            });
        }}>
            <Icon2><FiPower /></Icon2>
            <Text>Logout</Text>
        </Power>
    </Container>
  )
}

export default Staffsidebar

const Staffs = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    p{
        margin-left: 40px;
        
    }
`

const Img = styled.img`
    height: 30px;
`
const Power = styled.div`
    width: 100%;
    display: flex;
    margin-top: 250px; 
    align-items: center; 
`


const Text3 = styled.div`
    font-size: 17px;
    cursor: pointer;
    align-items: center;
    display: flex;
    margin-left: 15px;
    width: 410px;
    height: 40px;
`
const Text2 = styled.div`
    font-size: 17px;
    cursor: pointer;
    align-items: center;
    display: flex;
    margin-left: 15px;
    width: 410px;
    height: 40px;
`
const Text = styled.div`
    font-size: 17px;
    cursor: pointer;
    align-items: center;
    display: flex;
    margin-left: 30px;
    width: 120px;
    height: 40px;
`
const Text1 = styled.div`
    font-size: 17px;
    cursor: pointer;
    align-items: center;
    display: flex;
    margin-left: 15px;
    width: 210px;
    height: 40px;
`
const Icon2 = styled.div`
    color: #3e4956;
    font-size: 23px;
    cursor: pointer;
`
const Home2 = styled.div`
    width: 100%;
    display: flex;
    margin-top: 25px;
    align-items: center;
`
const Home = styled.div`
    width: 100%;
    display: flex;
    margin-top: 70px;
    align-items: center;
`

const Top = styled.div`
    display: flex;
    width: 100%;
    margin-top: 50px;
    
`
const Container = styled.div`
    width: 17%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: #F2F5F8;
    padding-left: 25px;
    position: fixed;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    z-index: 2;
    overflow: hidden;
    @media screen and (max-width: 1024px) {
        display: none;
    }
`