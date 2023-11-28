import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import styled from "styled-components";
import img from "../Assets/save.svg";
import { getAllClients, live1 } from "../api/staffEndpoints";
import { UseAppSelector } from "../Global/Store";
import { BsFillHousesFill, BsBusFront } from "react-icons/bs";

import {  useNavigate } from "react-router-dom";
import { MdOutlineCancel } from "react-icons/md";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import axios from "axios";
import * as yup from "yup";
import {IoIosSchool} from "react-icons/io"


const Recent = () => {
  const user = UseAppSelector((state) => state.Client);
  const navigate = useNavigate()

  const schema = yup
    .object({
      amount: yup.number().required("field must be"),
      subscribe: yup.boolean().required("field must be checked"),
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

  const onSubmitHousePlan = handleSubmit(async (data) => {
    await axios
      .post(`${live1}/houseplan/${user?._id}`, data)
      .then((res) => {
        console.log("this is res from plans file" , res)
        navigate("/Rent")
        Swal.fire({
          title: "succeful",
          icon: "success",
        });
      })
      .catch((err) => {
        Swal.fire({
          title: "an error occured",
          icon: "error",
          text: `${err.response?.data?.message}`,
        });
        console.log(err);
      });
  });
  const onSubmitFeesPlan = handleSubmit(async (data: any) => {
    await axios
      .post(`${live1}/schoolplan/${user?._id}`, data)
      .then((res) => {
        console.log("this is res from plans file" , res)
        navigate("/schoolfees")
        Swal.fire({
          title: "succeful",
          icon: "success",
        });
      })
      .catch((err) => {
        Swal.fire({
          title: "an error occured",
          icon: "error",
          text: `${err.response?.data?.message}`,
        });
        console.log(err);
      });
  });
  const onSubmitTourPlan = handleSubmit(async (data: any) => {
    await axios
      .post(`${live1}/travel/${user?._id}`, data)
      .then((res) => {
        console.log("this is res from plans file" , res)
        navigate("/Travel")
        Swal.fire({
          title: "succeful",
          icon: "success",
        });
      })
      .catch((err) => {
        Swal.fire({
          title: "an error occured",
          icon: "error",
          text: `${err.response?.data?.message}`,
        });
        console.log(err);
      });
  });

  const [plans, setplans] = useState(false);
  const [rents, setRents] = useState(false);
  const [fees, setfees] = useState(false);
  const [tour, setTour] = useState(false);

  const Showplans = () => {
    setplans(!plans);
  };

  const Showrents = () => {
    setRents(!rents);
    setplans(false);
  };

  const Showfees = () => {
    setfees(!fees);
    setplans(false);
  };

  const Showtour = () => {
    setTour(!tour);
    setplans(false);
  };

  const Remove = () => {
    setplans(false);
  };

  const Removerent = () => {
    setRents(false);
  };

  const Removefees = () => {
    setfees(false);
  };

  const Removetour = () => {
    setTour(false);
  };

  const allClients = useQuery({
    queryKey: ["viewClients"],
    queryFn: getAllClients,
  });
  console.log("this is all staffs", allClients.data);

  console.log(user);
  return (
    <Container>
      <Cardhold>
        <Left>
          <Img src={img} />
        </Left>
        <Right>
          <Top>Savings Plan</Top>
          <P>
            <p>Discover effective strategies for compounding money over time</p>
            <Down>
              <p>
                This savings plan can be your financial nest towards achieving
                any capital project such as building a house or against
                unforeseen circumstances such as disability.
              </p>
            </Down>
            <Button onClick={Showplans}>Start Plans</Button>
            <Cming>Coming Soon......!</Cming>
          </P>
        </Right>
      </Cardhold>

      {plans ? (
        <Plans onClick={Remove}>
          <Holder>
            <Card4>
              <Circle4>
                <BsFillHousesFill />
              </Circle4>
              <Wallet>
                <h3>Rents</h3>
                <p>Wallet id</p>
                <button onClick={Showrents}>Get Started</button>
              </Wallet>
            </Card4>

            <Card2>
              <Circle2>
                <IoIosSchool />
              </Circle2>
              <Wallet>
                <h3>School fees</h3>
                <p>Wallet id</p>
                <button onClick={Showfees}>Get Started</button>
              </Wallet>
            </Card2>

            <Card3>
              <Circle3>
                <BsBusFront />
              </Circle3>
              <Wallet>
                <h3>Travel & Tour</h3>
                <p>Wallet id</p>
                <button onClick={Showtour}>Get Started</button>
              </Wallet>
            </Card3>
            <Icons onClick={Remove}>
              <MdOutlineCancel />
            </Icons>
          </Holder>
        </Plans>
      ) : null}

      {rents ? (
        <Savehold>
          <Proceed>
            <Quick>
              <h3>Rents</h3>
            </Quick>
            <p>Enter an amount you want to save</p>

            <Tap>
              <p>Tap here & enter .. (e.g 5000)</p>
              <Input
                type="number"
                {...register("amount")}
                placeholder="Tap here & enter .. (e.g 5000)"
              />
              <p>{errors?.amount && errors?.amount?.message} </p>
              <Subhold>
                <Input2 {...register("subscribe")} type="checkbox" />{" "}
                <label htmlFor="">Subscribe to this plan</label>
                <p>{errors?.subscribe && errors?.subscribe?.message} </p>
              </Subhold>
            </Tap>
            {/* <NavLink to="/Rent" style={{ textDecoration: "none" }}> */}
              <button
                onClick={() => {
                    onSubmitHousePlan();
                }}
              >
                Proceed
              </button>
            {/* </NavLink> */}
            <Icron onClick={Removerent}>
              <MdOutlineCancel />
            </Icron>
          </Proceed>
        </Savehold>
      ) : null}

      {fees ? (
        <Savehold>
          <Proceed2>
            <Quick2>
              <h3>School fees</h3>
            </Quick2>
            <p>Enter an amount you want to save</p>

            <Tap>
              <p>Tap here & enter .. (e.g 5000)</p>
              <Input
                type="number"
                {...register("amount")}
                placeholder="Tap here & enter .. (e.g 5000)"
              />
              <p>{errors?.amount && errors?.amount?.message} </p>
              <Subhold>
                <Input2 {...register("subscribe")} type="checkbox" />{" "}
                <label htmlFor="">Subscribe to this plan</label>
                <p>{errors?.subscribe && errors?.subscribe?.message} </p>
              </Subhold>
            </Tap>
            {/* <NavLink to="/schoolfees" style={{ textDecoration: "none" }}> */}
              <button   onClick={() => {
                    onSubmitFeesPlan();
                }}>Proceed</button>
           
            <Icron onClick={Removefees}>
              <MdOutlineCancel />
            </Icron>
          </Proceed2>
        </Savehold>
      ) : null}

      {tour ? (
        <Savehold>
          <Proceed3>
            <Quick3>
              <h3>Travel & Tour</h3>
            </Quick3>
            <p>Enter an amount you want to save</p>

            <Tap>
              <p>Tap here & enter .. (e.g 5000)</p>
              <Input
                type="number"
                {...register("amount")}
                placeholder="Tap here & enter .. (e.g 5000)"
              />
              <p>{errors?.amount && errors?.amount?.message} </p>
              <Subhold>
                <Input2 {...register("subscribe")} type="checkbox" />{" "}
                <label htmlFor="">Subscribe to this plan</label>
                <p>{errors?.subscribe && errors?.subscribe?.message} </p>
              </Subhold>
            </Tap>
            {/* <NavLink to="/Travel" style={{ textDecoration: "none" }}> */}
              <button
               onClick={() => {
                onSubmitTourPlan();
            }}
              >Proceed</button>
            {/* </NavLink> */}
            <Icron onClick={Removetour}>
              <MdOutlineCancel />
            </Icron>
          </Proceed3>
        </Savehold>
      ) : null}
    </Container>
  );
};

export default Recent;
const Cming = styled.div`
  color: #ef7914;
`
const Icron = styled.div`
  position: absolute;
  font-size: 25px;
  right: 30%;
  color: #fff;
  cursor: pointer;
  top: 120px;
`;
const Icons = styled.div`
  position: absolute;
  font-size: 25px;
  right: 18%;
  color: #fff;
  cursor: pointer;
  top: 120px;
`;
const Input2 = styled.input``;
const Subhold = styled.div`
  display: flex;
  margin-top: 3px;
  label {
    margin: 0;
    font-size: 14px;
    font-weight: 600;
  }
`;
const Input4 = styled.input`
  height: 40px;
  padding-left: 15px;
  border-radius: 7px;
  outline-color: #6a3eb7;
  outline-width: 3px;
  margin-top: 3px;
  border: 1px solid gray;
`;
const Input3 = styled.input`
  height: 40px;
  padding-left: 15px;
  border-radius: 7px;
  outline-color: #ef7914;
  outline-width: 3px;
  margin-top: 3px;
  border: 1px solid gray;
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
const Tap = styled.div`
  p {
    margin: 0;
    font-size: 14px;
    font-weight: 600;
  }
  margin-top: 100px;
  display: flex;
  flex-direction: column;
`;
const Quick3 = styled.div`
  h3 {
    font-size: 25px;
    margin: 0;
    color: #6a3eb7;
  }
`;
const Quick2 = styled.div`
  h3 {
    font-size: 25px;
    margin: 0;
    color: #ef7914;
  }
`;
const Quick = styled.div`
  h3 {
    font-size: 25px;
    margin: 0;
    color: #39a081;
  }
`;
const Proceed3 = styled.div`
  width: 350px;
  height: 390px;
  background-color: #fff;
  border-radius: 10px;
  flex-direction: column;
  padding: 20px;
  p {
    margin: 0;
    font-size: 14px;
    margin-top: 3px;
  }
  button {
    width: 100%;
    height: 50px;
    background-color: #6a3eb7;
    color: #fff;
    border-radius: 5px;
    border: none;
    outline: none;
    margin-top: 100px;
    cursor: pointer;
  }
`;
const Proceed2 = styled.div`
  width: 350px;
  height: 390px;
  background-color: #fff;
  border-radius: 10px;
  flex-direction: column;
  padding: 20px;
  p {
    margin: 0;
    font-size: 14px;
    margin-top: 3px;
  }
  button {
    width: 100%;
    height: 50px;
    background-color: #ef7914;
    color: #fff;
    border-radius: 5px;
    border: none;
    outline: none;
    margin-top: 100px;
    cursor: pointer;
  }
`;
const Proceed = styled.div`
  width: 350px;
  height: 390px;
  background-color: #fff;
  border-radius: 10px;
  flex-direction: column;
  padding: 20px;
  p {
    margin: 0;
    font-size: 14px;
    margin-top: 3px;
  }
  button {
    width: 100%;
    height: 50px;
    background-color: #39a081;
    color: #fff;
    border-radius: 5px;
    border: none;
    outline: none;
    margin-top: 100px;
    cursor: pointer;
  }
`;
const Savehold = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  position: fixed;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 5;
`;
const Circle3 = styled.div`
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
const Card3 = styled.div`
  width: 240px;
  height: 150px;
  background-color: #0d71fa;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding-left: 15px;
  margin: 10px;
`;
const Circle4 = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background-color: #82d1b9;
  color: #fff;
  font-size: 30px;
`;
const Card4 = styled.div`
  width: 240px;
  height: 150px;
  background-color: #39a081;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding-left: 15px;
  margin: 10px;
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
    font-size: 23px;
    margin: 0;
  }
  button {
    cursor: pointer;
    margin-top: 12px;
    outline: none;
    border: none;
    width: 90px;
    background: none;
    height: 35px;
    border-radius: 50px;
    text-decoration: underline;
    color: #fff;
  }
`;
const Circle2 = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background-color: #f7a156;
  color: #fff;
  font-size: 30px;
`;
const Card2 = styled.div`
  width: 240px;
  height: 150px;
  background-color: #ef7914;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding-left: 15px;
`;
const Holder = styled.div`
  width: 900px;
  height: 400px;
  display: flex;
  background-color: #fff;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;
const Plans = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  z-index: 123456;
  position: relative;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 5;
  transition: all 350ms ease-in-out;
`;
const Button = styled.button`
  width: 120px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  background-color: #0d71fa;
  color: #fff;
  cursor: pointer;
  border-radius: 5px;
  transition: all 350ms ease-in-out;
  :hover {
    background-color: #fff;
    color: #0d71fa;
    border: 1px solid #0d71fa;
  }
`;
const Down = styled.div``;
const P = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  p {
  }
`;
const Right = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-left: 40px;
  @media screen and (max-width: 500px) {
    width: 100%;
    text-align: center;
    margin-top: 12px;
    margin-bottom: 10px;
  }
`;
const Left = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  @media screen and (max-width: 500px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;
const Icon = styled.div`
  margin-left: 40px;
  margin-top: 5px;
`;
const Start = styled.div`
  cursor: pointer;
  margin-top: 40px;
  display: flex;
  align-items: center;
  transition: all 350ms ease-in-out;
  :hover {
    color: #ef7914;
  }
`;
const Texthold = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
  h3 {
    color: #ef7914;
  }
  p {
    width: 260px;
    margin: 0;
  }
`;
const Img = styled.img`
  height: 200px;
`;
const Card = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;
const Cardhold = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-left: -30px;
  margin-top: 40px;
  flex-wrap: wrap;
`;
const Top = styled.div`
  display: flex;
  font-size: 23px;
  font-weight: 500;
  margin-left: -30px;
`;

const Container = styled.div`
  width: 93%;
  display: flex;
  height: 100%;
  margin-top: 50px;
  flex-direction: column;
  /* background-color: black; */
  /* margin-left: 260px; */
  @media screen and (max-width: 500px) {
    padding: 20px;
  }
  @media screen and (max-width: 1024px) {
    margin-left: 0px;
  }
`;
