import React from "react";
import { FcGoogle } from "react-icons/fc";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FiArrowLeftCircle } from "react-icons/fi";
import image from "../../Assets/usersignin.png";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { UseAppDispatch, UseAppSelector } from "../../Global/Store";
import { useMutation } from "@tanstack/react-query";
import { live, staffReg } from "../../api/staffEndpoints";
import { registerClient } from "../../Global/ReduxState";
import Swal from "sweetalert2";
import Loading from "../../Loading";

import { staffData } from "../../api/staffEndpoints";
import axios from "axios";

const StaffSignup = () => {
  const dispatch = UseAppDispatch();
  const navigate = useNavigate();

  const schema = yup
    .object({
      yourName: yup.string().required(),
      email: yup.string().email().required(),
      position: yup.string().required(),
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
  
    const newClient = useMutation({
      mutationFn: (data: any) => staffReg(data),
      mutationKey: ["registerStaff"],
      onSuccess: (data: any) => {
        // console.log("my data", data);
        dispatch(registerClient(data.data));
        Swal.fire({
          title: "registration succesful",
          // html: "redirecting to login",
          timer: 2000,
          timerProgressBar: true,
    
          willClose: () => {
            navigate("/staffdashboard");
          },
        });
      },
      onError: (error: any) => {
        // console.log("error", error);
        // handle error here
        Swal.fire({
          title: "registration failed",
          text: "Something went wrong! .....make sure you fill in the valid details",
          icon: "error",
        });
      },
    });
    const submit = handleSubmit((data) => {
      newClient.mutate(data);
      // console.log("this is yup data", data);
      reset();
    
    });



  return (
    <Container>
      {
              newClient.isLoading ? <Loading /> : null
            }
      <Wrapper>
        <InputPart>
          <IconTop to="/optionsignup">
            <FiArrowLeftCircle />
          </IconTop>
          <SignInputHold>
            <SignTitle>Sign Up</SignTitle>
            <SignSubTitle>To Intract with your account</SignSubTitle>
            <InputForm onSubmit={submit}>
              <InputDiv
                {...register("yourName")}
                placeholder="Your Name"
                type="text"
              />
              <p>{errors?.yourName && errors?.yourName?.message} </p>
              <InputDiv
                {...register("email")}
                placeholder="Email "
                type="email"
              />
              <p>{errors?.email && errors?.email?.message} </p>
              <InputDiv
                {...register("companyname")}
                placeholder="Company's Name"
                type="text"
              />
              <p>{errors?.companyname && errors?.companyname?.message} </p>
              <InputDiv
                {...register("position")}
                placeholder="position"
                type="text"
              />
              <p>{errors?.position && errors?.position?.message} </p>
              <InputDiv
                {...register("password")}
                placeholder="password"
                type="password"
              />
              <p>{errors?.password && errors?.password?.message} </p>
              <InputButton type="submit" >Sign Up</InputButton>
            </InputForm>
            <HasAcc>
              Already has an account?{" "}
              <NavLink
                to="/user/signin"
                style={{
                  textDecoration: "none",
                }}
              >
                <span>Sign In</span>
              </NavLink>
            </HasAcc>
          </SignInputHold>
        </InputPart>
        <ImagePart>
          <ImgBoxHold>
            <ImgBox>
              <ImgMain src={image} />
            </ImgBox>
          </ImgBoxHold>
        </ImagePart>
      </Wrapper>
    </Container>
  );
};

export default StaffSignup;

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
  width: 55%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
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
  p {
    margin: 0px;
    color: red;
  }
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
  font-family: Montserrat;
  font-weight: 700;
  color: #fff;
  background-color: #377dff;
  border-radius: 3px;
  margin-top: 10px;
  cursor: pointer;
  transition: all 350ms;
  :hover {
    transform: scale(0.98);
  }
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
  /* margin-top: -65px; */
`;

const ImgBoxHold = styled.div`
  margin-top: 80px;
`;
