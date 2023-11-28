// import React from 'react'
// import styled from 'styled-components';
// import images from "../Assets/lefthero.png"
// import images2 from "../Assets/right.png"

// const Hero = () => {
//   return (
//     <Container>
//         <Wrapper>
//           <Left>
//             <Text>It’s possible with teamwork</Text>
//           </Left>
//           <Right>
//             <Images src={images2}/>
//           </Right>
//         </Wrapper>
//     </Container>
//   )
// }

// export default Hero
// const Text = styled.h2`
//   color: #253858;
//   font-size: 55px;
//   margin-left: 40px;
//   font-weight: 500;
//   width: 500px;
//   /* background-color: red; */
//   span{
//     margin-left: 65px;
//     color: #253858;
//   }
//   @media screen and (max-width: 425px) {
//     font-size: 40px;
//     margin-left: 0px;
//   }
//    @media screen and (max-width: 375px) {
//     font-size: 25px;
//   }
//   @media screen and (max-width: 320px) {
//     font-size: 20px;
//   }
// `

// const Images = styled.img`
//   height: 460px;
//   @media screen and (max-width: 425px) {
//     height: 300px;
//   }
//   @media screen and (max-width: 375px) {
//     height: 270px;
//   }
// `
// const Right = styled.div`
//   width: 55%;
//   height: 100%;
//   display: flex;
//   justify-content: center;
//   overflow: hidden;
//   align-items: center;
//   @media screen and (max-width: 768px){
//     width: 100%;
//   }
//   @media screen and (max-width: 425px){
//     width: 100%;
//     display: flex;
//     height: 70%;

//     overflow: hidden;
//     /* background-color: red; */
//      @media screen and (max-width: 375px) {
//     height: 40%;
//   }
//   }
// `

// const Left = styled.div`
//   width: 500px;
//   display: flex;
//   align-items: center;
//   font-weight: 800;
//   /* background-image: url(${images}); */
//     background-repeat: no-repeat;
//     background-position: center;
//     background-size: cover;
//      @media (max-width: 800px) {
//     text-align: center;
//      }
//      @media (max-width: 425px) {
//     text-align: center;
//     display: flex;
//     justify-content: center;
//     /* background-color: red;s */
//      }
// `
// const Wrapper = styled.div`
//   width: 95%;
//   display: flex;
//   height: 100%;
//   flex-wrap: wrap;
//   @media (max-width: 800px) {
//     justify-content: center;
//   }
// `

// const Container = styled.div`
//     width: 100%;
//     height: 85vh;
//     display: flex;
//     justify-content: center;
//     overflow: hidden;
//     @media screen and (max-width: 425px) {
//       margin-top: 40px;
//     }
// `

import React from "react";
import styled from "styled-components";
import img from "../Assets/company.png";
import img2 from "../Assets/actives.png";
import img3 from "../Assets/paydash.png";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Top>
            <h1>The Smart Way for Online Business Payment.</h1>
          </Top>
          <P>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
              quis aliquam, magni porro harum non, alias atque voluptates beatae
              doloremque ducimus autem saepe tenetur nostrum explicabo error
              quasi!
            </p>
          </P>
          <NavLink to="/optionsignup" style={{ textDecoration: "none" }}>
            <Buttonhold>
              <Button>Get Started</Button>
            </Buttonhold>
          </NavLink>
          <Down>
            <First>
              <Imghold>
                <Img src={img} />
              </Imghold>
              <Company>
                <p>Company Registered</p>
                <h2>200+</h2>
              </Company>
            </First>

            <Second>
              <Imghold>
                <Img src={img2} />
              </Imghold>
              <Company>
                <p>Staffs Active</p>
                <h2>800k</h2>
              </Company>
            </Second>
          </Down>
        </Left>
        <Right>
          <Image src={img3} />
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Hero;
const Buttonhold = styled.div`
  text-decoration: none;
  @media screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;
const Image = styled.img`
  @media screen and (max-width: 425px) {
    height: 450px;
  }
`;
const Right = styled.div`
  width: 48%;
  display: flex;
  justify-content: center;
  padding-top: 50px;
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    width: 100%;
  }
`;
const Company = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  p {
    color: #fff;
    font-weight: 600;
    margin-bottom: 0;
    margin-top: 3px;
    @media screen and (max-width: 425px) {
      font-size: 15px;
      display: flex;
      background-color: red;
    }
  }
  h2 {
    color: #fff;
    margin: 0;
    font-size: 37px;
    font-weight: 400;
  }
`;
const Img = styled.img`
  border-radius: 10px;
  @media screen and (max-width: 425px) {
    height: 40px;
  }
`;
const Imghold = styled.div``;
const Second = styled.div`
  display: flex;
  margin-left: 40px;
`;
const First = styled.div`
  display: flex;
`;
const Down = styled.div`
  display: flex;
  margin-top: 60px;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: flex;
    width: 100%;
    justify-content: space-around;
  }
  @media screen and (max-width: 425px) {
    display: none;
  }
`;
const Button = styled.button`
  width: 150px;
  height: 50px;
  border: none;
  outline: none;
  text-decoration: none;
  background-color: #00b4d8;
  border-radius: 50px;
  color: #fff;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 350ms ease-in-out;
  margin-top: 20px;
  :hover {
    background-color: #fff;
    color: #00b4d8;
    border: 1px solid #00b4d8;
  }
`;
const P = styled.div`
  p {
    color: #fff;
    line-height: 25px;
    @media screen and (max-width: 768px) {
      text-align: center;
    }
  }
`;
const Top = styled.div`
  h1 {
    color: #fff;
    font-size: 37px;
    @media screen and (max-width: 768px) {
      text-align: center;
    }
    @media screen and (max-width: 425px) {
      text-align: center;
      font-size: 32px;
    }
    @media screen and (max-width: 375px) {
      text-align: center;
      font-size: 27px;
    }
  }
`;
const Left = styled.div`
  width: 48%;
  display: flex;
  flex-direction: column;
  padding-top: 90px;
  @media screen and (max-width: 768px) {
    width: 100%;
    /* background-color: red; */
    padding-top: 50px;
    justify-content: center;
    display: flex;
  }
  /* background-color: red; */
`;
const Wrapper = styled.div`
  width: 92%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  /* @media screen and (max-width: 425px) {
    flex-direction: column-reverse;
  } */
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  background-color: #005ad9;
  padding-top: 30px;
  /* padding-bottom: 10px; */
  justify-content: center;
`;
