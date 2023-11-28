// import React from 'react'
// import styled from 'styled-components'
// import images from "../Assets/setting.png"
// import Events from './Events'
// import Life from './Life'

// const Team = () => {
//   return (
//     <Container>
//         {/* <Wrapper>
//             <Left>
//                 <Top>TEAM ESSENTIALS</Top>
//                 <Bold>Explore resources to <br /> unleash the potential <br /> of your team</Bold>
//             </Left>
//             <Right>
//                 <Up>
//                     <Images src={images} />
//                 </Up>
//                 <Down>
//                     <Atlas>Atlassian Community</Atlas>
//                     <Conn>Connect globally and meet locally to get more out of our products.</Conn>
//                     <End>
//                         <Sea>Search the forum</Sea>
//                         <Join>Join our community</Join>
//                     </End>
//                 </Down>
//             </Right>
//         </Wrapper> */}
//         <Life />
//         {/* <Events /> */}
//     </Container>
//   )
// }

// export default Team

// const Join = styled.div`
//     color: #0052cc;
//     cursor: pointer;
// `

// const Sea = styled.div`
//     color: #0052cc;
//     cursor: pointer;
// `

// const End = styled.div`
//     width: 50%;
//     display: flex;
//     height: 20px;
//     justify-content: space-between;
//     margin-top: 25px;
// `

// const Conn = styled.div`
//     color: #253858;
//     font-weight: 500;
// `

// const Atlas = styled.h3`
//     font-size: 1.5rem;
//     line-height: 1.33333333;
//     margin-bottom: 19px;
//     color: #253858;
//     letter-spacing: .3px;
//     font-weight: 500;
// `

// const Down = styled.div`
//     width: 100%;
//     height: 40%;
//     display: flex;
//     flex-direction: column;
//     background-color: #FFEBE5;
//     align-items: center
// `

// const Images = styled.img`
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
// `

// const Up = styled.div`
//     width: 100%;
//     height: 60%;
// `

// const Right = styled.div`
//     width: 65%;
//     height: 420px;
//     display: flex;
//     flex-direction: column;
//     border-radius: 3px;
//     overflow: hidden;
//     box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
//     :hover{
//         box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
//     }
// `

// const Bold = styled.h1`
//     color: #091e42;
// `

// const Top = styled.h5`
//     color: #008da6 !important;
//     font-size: 16px;
//     font-weight: 700;
//     letter-spacing: 1.6px;
//     margin-bottom: 16px;
//     margin-top: 70px;
// `

// const Left = styled.div`
//     width: 35%;
//     display: flex;
//     flex-direction: column;
// `

// const Wrapper = styled.div`
//     width: 90%;
//     display: flex;
// `

// const Container = styled.div`
//     width: 100%;
//     display: flex;
//     justify-content: center;
//     padding-bottom: 60px;
//     flex-direction: column;
//     align-items: center;
// `

import React from 'react'
import styled from 'styled-components'
import img from "../Assets/digiP.webp"
// import img from "../Assets/creditlarge.png"
import img2 from "../Assets/payment.png"
import img3 from "../Assets/growth.png"
import img4 from "../Assets/connect.png"

const Team = () => {
  return (
      <Container>
          <Wrapper>
              <Left>
                  <Top><h1>Connecting all your business banking needs.</h1></Top>
                  <P><p>Get a unique bank account number that enables your company to pay employees' salaries through the wallet, view transaction history, check account balance, make deposits, withdraw, & transfer with ease!</p></P>
                  <Payment>
                      <Img2 src={img2} />
                      <Second>
                          <Up><h3>Payment Solution</h3></Up>
                          <p>We automatically route payments through the most optimal channels, ensuring the highest transaction success rates in the market.</p>
                      </Second>
                  </Payment>

                  <Payment>
                      <Img2 src={img3} />
                      <Second>
                          <Up><h3>Business Growth</h3></Up>
                          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae pariatur libero delectus repellendus eum deleniti?</p>
                      </Second>
                  </Payment>

                  <Payment>
                      <Img2 src={img4} />
                      <Second>
                          <Up><h3>Connected People</h3></Up>
                          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae pariatur libero delectus repellendus eum deleniti?</p>
                      </Second>
                  </Payment>
              </Left>
              <Right>
                  <Img src={img} />
              </Right>
          </Wrapper>
    </Container>
  )
}

export default Team
const Right = styled.div`
    width: 48%;
    display: flex;
    /* justify-content: center; */
    @media screen and (max-width: 1024px) {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    @media screen and (max-width: 500px) {
         width: 90%;
        display: flex;
        justify-content: center;
        margin-top: 35px;
    }
`
const Up = styled.div`
    h3{
        color: #00214f;
        font-weight: 700;
        margin: 0;
    }
`
const Second = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 15px;
    p{
        margin: 0;
        line-height: 25px;
        margin-top: 5px;
        font-size: 15px;
    }
`
const Img2 = styled.img`
    @media screen and (max-width: 320px) {
        height: 50px;
    }
    @media screen and (max-width: 500px) {
        height: 50px;
    }
`
const Payment = styled.div`
    display: flex;
    margin-top: 40px;
`
const P = styled.div`
    p{
        margin: 0;
        line-height: 25px;
    }
`
const Top = styled.div`
    h1{
        color: #00214F;
        /* text-align: center; */
        @media screen and (max-width: 425px) {
            font-size: 26px;
        }
        @media screen and (max-width: 768px) {
            font-size: 26px;
            text-align: center;
        }
         @media screen and (max-width: 375px) {
            font-size: 22px;
        }
    }
`
const Img = styled.img`
    height: 500px;
     @media screen and (max-width: 1024px) {
        height: 90%;
    }
    @media screen and (max-width: 768px) {
        height: 90%;
    }
    @media screen and (max-width: 500px) {
        height: 400px;
    }
    @media screen and (max-width: 320px) {
        height: 300px;
    }
`
const Left = styled.div`
    width: 48%;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 425px) {
        width: 100%;
    }
    @media screen and (max-width: 768px) {
        width: 100%;
    }
`
const Wrapper = styled.div`
    width: 92%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    flex-direction: row-reverse;
`

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 70px;
`