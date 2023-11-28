import React, {useState} from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FiArrowLeftCircle } from "react-icons/fi";
import styled from "styled-components";
import image from "../../Assets/usersignin.png";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { loginClient } from "../../api/staffEndpoints";
import Swal from "sweetalert2";
import { UseAppDispatch } from "../../Global/Store";
import { registerClient } from "../../Global/ReduxState";
import Loading from "../../Loading";



const StaffSignin = () => {

  const dispatch = UseAppDispatch();

  const navigate = useNavigate();

  const schema = yup
    .object({
      email: yup.string().email().required(),
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
    mutationFn: loginClient,
    mutationKey: ["loginClients"],

    onSuccess: (myData) => {
      dispatch(registerClient(myData.data));
      Swal.fire({
        title: "login",
        html: "redirecting to dashboard",
        timer: 2000,
        timerProgressBar: true,


        willClose: () => {
          navigate("/staffdashboard");
        },
      });

    },
    onError: () => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong! .....email or password  incorrect",
        //  footer: '<a href="">Why do I have this issue?</a>',
      });
    },
  });

  const Submit = handleSubmit((data) => {
    signin.mutate(data);
    // console.log(`this is yup signin`, data);
    // reset();

    
  });
// 22607514261
  const [show, setShow] = useState(false)

  return (
    <Container>
      {
              signin.isLoading ? <Loading /> : null
            }
      <Wrapper>
        <InputPart>
          <IconTop to="/optionsignin">
            <FiArrowLeftCircle />
            
          </IconTop>
          <SignInputHold>
            <SignTitle>Log In</SignTitle>
            <SignSubTitle>To Intract with your account</SignSubTitle>
            <InputForm onSubmit={Submit}>
              <InputDiv
                {...register("email")}
                placeholder="Email"
                type="email"
              />
              <p>{errors?.email && errors?.email?.message}</p>
              <InputDiv
                {...register("password")}
                placeholder="Password"
                type="password"
              />
              <p>{errors?.password && errors?.password?.message}</p>
              <InputDiv
                {...register("companyname")}
                placeholder="Company's Name"
                type="text"
              />
              <p>{errors?.companyname && errors?.companyname?.message}</p>
              <InputButton type="submit">Sign In</InputButton>
            </InputForm>
            <HasAcc>
              Don't have an account?{""}
              <NavLink
                to="/user/signup"
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
              <ImgMain src={image} />
            </ImgBox>
          </ImgBoxHold>
        </ImagePart>
      </Wrapper>
    </Container>
  );
};

export default StaffSignin;

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
  p {
    margin: 0;
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
