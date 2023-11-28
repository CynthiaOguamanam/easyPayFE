import React from "react";
import styled from "styled-components";
import perfect from "../../Assets/perfect.png";
import school from "../../Assets/adds.png";

import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillLinkedin,
} from "react-icons/ai";
import { Link } from "react-router-dom";
// import easy from "../../Assets/explorer.png";
import logos from "../../Assets/logos2.png";

const OptionSignup = () => {
  return (
    <Container>
      <Wrapper>
        <Brand>
          {/* <Logo>
						<Bar>One</Bar>
						<LogoTitle wid>One Church Network</LogoTitle>
					</Logo> */}

          <LogoHolder to="/">
            <Logo>
              <img src={logos} alt="" />
            </Logo>
            {/* <LogoTitle>Easy pay</LogoTitle> */}
          </LogoHolder>

          <Text>track your company's salary disbursment with easy</Text>
          {/* <Brief wid>
            “Woman,” Jesus replied, “believe me, a time is coming when you will
            worship the Father neither on this mountain nor in Jerusalem. John
            4:21
          </Brief> */}
        </Brand>

        <Line />
        <MainCard>
          <LogoTitle1>
            <Brief>Let's Help you Get Started</Brief>
          </LogoTitle1>

          <HolderData bg="#377dff" to="/admin/signup">
            <Content>
              <TextContext>Sign Up as a company </TextContext>
              {/* <TextDetail>
                In the last days the mountain of the LORD’s temple will be
                established as the highest of the mountains... Micah 4:1
              </TextDetail> */}
            </Content>
            <Image src={school} alt="school" />
          </HolderData>

          <HolderData bg="#8c0e0f" to="/user/signup">
            <Content>
              <TextContext>Sign Up as a company's staff</TextContext>
              {/* <TextDetail>
                In the last days the mountain of the LORD’s temple will be
                established as the highest of the mountains... Micah 4:1
              </TextDetail> */}
            </Content>
            <Image src={perfect} alt="perfect" />
          </HolderData>

          <Info>
            <SocialText>
              {/* Don't Have an Account? <Span to="/">Register</Span> */}
            </SocialText>
            <SocialText>{/* <Span to="/">Forgot Pasword?</Span> */}</SocialText>
          </Info>
        </MainCard>
      </Wrapper>
    </Container>
  );
};

export default OptionSignup;

const LogoTitle = styled.div`
  font-weight: 700;
  color: gray;
  width: 100px;
  line-height: 1;
  font-size: 18px;
  color: #377dff;
`;

const Logo = styled.div`
  /* padding: 18px; */
  /* background-color: #377dff; */
  color: white;
  /* border: 1px solid #377dff; */
  border-radius: 50px;
  margin-right: 5px;
  width: 150px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  font-weight: 700;
`;

const LogoHolder = styled(Link)`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  margin-bottom: 30px;
`;

const TextContext = styled.div`
  font-weight: 700;
  font-size: 23px;
  margin-bottom: 10px;
`;

const TextDetail = styled.div`
  font-size: 11px;
  width: 250px;
`;

const Content = styled.div`
  padding-left: 20px;
  color: white;
  line-height: 1.2;
`;

const Image = styled.img`
  /* width: 40px; */
  height: 230%;
  object-fit: fill;

  @media screen and (max-width: 425px) {
    /* width: 95%; */
    height: 190%;
    object-fit: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: -100px;
  }
`;

const HolderData = styled(Link)<{ bg: string }>`
  text-decoration: none;
  margin: 10px 0;
  width: 100%;
  height: 120px;
  background-color: ${({ bg }) => bg};
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;

  transition: all 350ms;

  :hover {
    cursor: pointer;
    transform: scale(0.99);
  }

  @media screen and (max-width: 425px) {
    width: 95%;

    display: flex;
    /* flex-direction: column; */
    align-items: center;
  }
`;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Icons = styled.div`
  display: flex;
  margin-top: 20px;
`;

const Icon3 = styled(AiFillLinkedin)`
  font-size: 35px;
  color: #0077b7;
  :hover {
    cursor: pointer;
  }
`;

const Icon2 = styled(AiFillTwitterSquare)`
  font-size: 35px;
  color: #50abf1;
  :hover {
    cursor: pointer;
  }
`;

const Icon1 = styled(AiFillFacebook)`
  font-size: 35px;
  color: #475993;
  :hover {
    cursor: pointer;
  }
`;

const SocialText = styled.div`
  font-size: 12px;
  display: flex;
  margin-top: 0px;
`;

const Social = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const MainCard = styled.div`
  width: 600px;
  flex-direction: column;
  display: flex;
  align-items: center;

  @media screen and (max-width: 425px) {
    width: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Line = styled.div`
  height: 400px;
  box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
    rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  margin: 0 0px;

  @media screen and (max-width: 1010px) {
    display: none;
  }
`;

const Brief = styled.div`
  margin-top: 20px;
  color: gray;
  font-size: 10px;
  text-align: center;

  @media screen and (max-width: 1010px) {
    display: none;
  }
`;

const Text = styled.div`
  font-weight: 700;
  margin-top: 25px;
  text-align: center;
  width: 300px;
  font-size: 25px;
  line-height: 1.1;
  color: #377dff;
  opacity: 0.8;

  @media screen and (max-width: 1010px) {
    margin-top: 5px;
  }
`;

const LogoTitle1 = styled.div`
  font-weight: 700;
  color: gray;
  margin-bottom: 50px;
  color: #377dff;
  font-size: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

// const LogoTitle = styled.div`
// 	font-weight: 500;
// 	color: gray;
// `;

const Bar = styled.div`
  width: 130px;
  height: 100px;
  border-radius: 10px;
  margin-bottom: 15px;
  background-color: #fffbf8;
  box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px,
    rgba(17, 17, 26, 0.1) 0px 0px 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  font-weight: 900;
  color: #377dff;
`;

const Brand = styled.div`
  width: 400px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Wrapper = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1010px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (max-width: 425px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
