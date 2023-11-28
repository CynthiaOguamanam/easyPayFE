import React from "react";
import { NavLink } from "react-router-dom";
import { FiArrowLeftCircle } from "react-icons/fi";
import styled from "styled-components";
import admin from "../../Assets/user.png";
// import image from "../image/usersignin.png";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { adminLogin } from "../../api/adminEndpoints";

import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { UseAppDispatch } from "../../Global/Store";
import { registerAdmin } from "../../Global/ReduxState";
import Loading from "../../Loading";
// import {BallTriangle} from "react-loader-spinner"
const AdminSignIn = () => {
  const dispatch = UseAppDispatch();
  const navigate = useNavigate();
  const schema = yup
    .object({
      companyEmail: yup.string().email().required(),
      password: yup.string().required(),
      companyname: yup.string().required("field must be required"),
    })
    .required();

  type formData = yup.InferType<typeof schema>;

  const {
    handleSubmit,
    formState: { errors },
    reset,
    register,
  } = useForm<formData>({
    resolver: yupResolver(schema),
  });

  const signin = useMutation({
    mutationFn: adminLogin,
    mutationKey: ["loginAllAdmin"],

    // onSuccess: (data) => {
    //   client.invalidateQueries(["socialMediaPost"]);
    // },

    onSuccess: (myData) => {
      dispatch(registerAdmin(myData.data));
      Swal.fire({
        title: "login",
        html: "redirecting to dashboard",
        timer: 2000,
        timerProgressBar: true,
        willClose: () => {
          navigate("/dashboard");
        },
      });
    },
    onError: () => {
      Swal.fire({
        title: "registration failed",
        text: "email or password incorrect",
        icon: "error",
      });
    },
  });

  const submit = handleSubmit((data: any) => {
    signin.mutate(data);
    // console.log(`this is yup signin`, data);
    // reset();
  });

  return (
    <Container>
      {
              signin.isLoading ? <Loading /> : null
            }
      {/* {signin?.isLoading ? <BallTriangle /> : null } */}
      <Wrapper>
        <InputPart>
          <IconTop to="/optionsignin">
            <FiArrowLeftCircle />
          </IconTop>
          <SignInputHold>
            <SignTitle>Log In</SignTitle>
            <SignSubTitle>To Intract with your account</SignSubTitle>
            <InputForm onSubmit={submit}>
              <InputDiv
                {...register("companyEmail")}
                placeholder="Email"
                type="email"
              />
              <InputDiv
                {...register("password")}
                placeholder="Password"
                type="password"
              />
              <InputDiv
                {...register("companyname")}
                placeholder="companyname"
                type="text"
              />
              <InputButton type="submit">Sign In</InputButton>
            </InputForm>
            <HasAcc>
              Don't have an account?{""}
              <NavLink
                to="/admin/signup"
                style={{
                  textDecoration: "none",
                }}
              >
                <span>Sign up</span>
              </NavLink>
            </HasAcc>
          </SignInputHold>
        </InputPart>
        <ImagePart>
          <ImgBoxHold>
            <ImgBox>
              <ImgMain src={admin} />
            </ImgBox>
          </ImgBoxHold>
        </ImagePart>
      </Wrapper>
    </Container>
  );
};

export default AdminSignIn;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Montserrat;
  background-color: ${(props) => props.theme.pageBackground};
`;
const Wrapper = styled.div`
  width: 57%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 800px) {
    justify-content: center;
  }
`;
const InputPart = styled.div``;
const ImagePart = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-items: flex-end;
  @media (max-width: 800px) {
    display: none;
  }
`;
const IconTop = styled(NavLink)`
  font-size: 30px;
  text-decoration: none;
  color: ${(props) => props.theme.textColor};
`;
const SignInputHold = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
`;
const SignTitle = styled.div`
  font-size: 25px;
  font-weight: 700;
  color: ${(props) => props.theme.textColor};
`;
const SignSubTitle = styled.div`
  font-size: 12px;
  color: #77838f;
`;
const InputForm = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;
const InputDiv = styled.input`
  height: 45px;
  width: 280px;
  margin: 10px 0;
  border: none;
  outline: none;
  border-radius: 5px;
  padding-left: 10px;
  font-family: Montserrat;
  font-weight: 700;
  font-size: 13px;
  background-color: #e8effc;
  ::placeholder {
    color: #377dff;
  }
`;
const InputButton = styled.button`
  height: 40px;
  border: none;
  outline: none;
  cursor: pointer;
  font-family: Montserrat;
  font-weight: 700;
  color: #fff;
  background-color: #377dff;
  border-radius: 3px;
  margin-top: 10px;
`;
const HasAcc = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: ${(props) => props.theme.textColor};
  span {
    color: #377dff;
    cursor: pointer;
    font-weight: 700;
    /* font-size: 15px; */
  }
`;

const ImgBox = styled.div`
  height: 320px;
  width: 300px;
  /* background-color: ${(props) => props.theme.pageBackground}; */
  background-color: #fff;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
`;
const ImgMain = styled.img`
  width: 290px;
  /* margin-top: -50px; */
`;

const ImgBoxHold = styled.div`
  margin-top: 80px;
`;
