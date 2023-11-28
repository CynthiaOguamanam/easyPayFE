import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
// import { GlobalProvider } from "../../Global/ContexGlobal/GlobalContex";
// import { FaMoon } from "react-icons/fa";
// import { MdOutlineWbSunny } from "react-icons/md";
import logos from "../Assets/logomain.png";

const Header = () => {
  const [scroll, setScroll] = useState<Boolean>(false);

  const changeHeaderColor = () => {
    if (window.scrollY >= 70) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  window.addEventListener("scroll", changeHeaderColor);
  //   const { setTheme, theme } = useContext(GlobalProvider);

  //   const changeTheme = () => {
  //     if (theme === "light") {
  //       setTheme("dark");
  //     } else {
  //       setTheme("light");
  //     }
  //   };

  return (
    <>
      {scroll ? (
        <Container bd="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" bg="#fff">
          <Wrapper>
            {/* <LogoDiv src="/image/ttlogo.png" alt="" /> */}

            <LogoHold>
              <img src={logos} alt="" />
            </LogoHold>
            <SignDiv>
              {/* <NavLink to="signup">
            <SignBtn>Sign Up</SignBtn>
          </NavLink> */}
              {/* <ToggleHold>
            {theme === "light" ? (
              <div style={{ cursor: "pointer" }} onClick={changeTheme}>
                <FaMoon color="#377dff" size="20px" />
              </div>
            ) : (
              <div style={{ cursor: "pointer" }} onClick={changeTheme}>
                <MdOutlineWbSunny color="#fff" size="20px" />
              </div>
            )}
          </ToggleHold> */}

              <NavLink to="/optionsignin">
                <SignBtn>Log In</SignBtn>
              </NavLink>
              <NavLink to="/optionsignup">
                <SignBtn2>Get started</SignBtn2>
              </NavLink>
              {/* <SignBtn >Change</SignBtn> */}
            </SignDiv>
          </Wrapper>
        </Container>
      ) : (
        <Container bd="" bg="#fff">
          <Wrapper>
            {/* <LogoDiv src="/image/ttlogo.png" alt="" /> */}

            <LogoHold>
              <img src={logos} alt="" />
            </LogoHold>
            <SignDiv>
              {/* <NavLink to="signup">
            <SignBtn>Sign Up</SignBtn>
          </NavLink> */}
              {/* <ToggleHold>
            {theme === "light" ? (
              <div style={{ cursor: "pointer" }} onClick={changeTheme}>
                <FaMoon color="#377dff" size="20px" />
              </div>
            ) : (
              <div style={{ cursor: "pointer" }} onClick={changeTheme}>
                <MdOutlineWbSunny color="#fff" size="20px" />
              </div>
            )}
          </ToggleHold> */}
              <NavLink to="/optionsignin">
                <SignBtn>Log In</SignBtn>
              </NavLink>
              <NavLink to="/optionsignup">
                <SignBtn2>Get started</SignBtn2>
              </NavLink>
              {/* <SignBtn >Change</SignBtn> */}
            </SignDiv>
          </Wrapper>
        </Container>
      )}
    </>
  );
};

export default Header;

const Container = styled.div<{ bd: string; bg: string }>`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1234;
  position: fixed;
  background-color: ${(props) => props.bg};
  box-shadow: ${(props) => props.bd};
  align-items: center;
  font-family: Montserrat;
  transition: all 350ms ease-in-out; ;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;


`;
const Wrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* background-color: red; */;
  @media Screen and (max-width: 768px){
    width: 70%;
  }
`;
// const LogoDiv = styled.img`
//   width: 50px;
//   margin: 10px;
// `;

const LogoHold = styled.div`
  font-weight: 900;
  font-size: 18px;
  width: 150px;
  height: 50px;
  display: flex;
  align-items: center;
  /* background-color: red; */

  img {
    width: 80%;
    height: 80%;
    object-fit: contain;
    /* box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px; */
  }
  @media Screen and (max-width: 768px){
    width: 40%;
  }
`;

const SignDiv = styled.div`
  display: flex;
  align-items: center;
  /* background-color: green; */

@media Screen and (max-width: 768px){
  width: 50%;

}
`;
const SignBtn2 = styled.button`
  height: 40px;
  width: 120px;
  /* margin: 12px; */
  margin-left: 10px;
  background-color: #377dff;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  transition: all 350ms;
  transform: scale(1);
  :hover {
    transform: scale(0.94);
  }
`;
const SignBtn = styled.button`
  height: 40px;
  width: 120px;
  /* margin: 12px; */
  margin-left: 10px;
  border: none;
  border-radius: 5px;
  color: #377dff;
  font-size: 14px;
  font-weight: 600;
  transition: all 350ms;
  transform: scale(1);
  :hover {
    transform: scale(0.94);
  }
  @media screen and (max-width: 425px) {
    display: none;
  }
`;

const ToggleHold = styled.div``;
