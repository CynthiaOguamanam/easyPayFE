import React from 'react'
import styled from 'styled-components'
import { live1, live2 } from '../api/staffEndpoints';
import img from "../Assets/21.jpeg"

import Swal from "sweetalert2";
import axios from "axios";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { UseAppSelector } from '../Global/Store';

const Pay = () => {

    const user = UseAppSelector((state) => state.Admin);

    const schema = yup
    .object({
      walletNumber: yup.number().required("field must be filled"),
      amount: yup.number().required("field mu"),
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


  const onSubmit = handleSubmit(async (data:any) => {
    await axios
      .post(`${live2}/paysalary/${user?._id}`, data)
      .then((res) => {
        reset()
        Swal.fire({
          icon: "success",
          text: `${res?.data?.message}`
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
  return (
      <Container>
          <Top><h3>Pay Staffs</h3></Top>
          <Inputhold>
              <Text>Wallet Number</Text>

                  <Input {...register("walletNumber")}  type="text" placeholder='**** **** **** 1234'/>
                  <p>{errors?.walletNumber && errors?.walletNumber?.message} </p>
          </Inputhold>

          {/* <Inputhold>
              <Text>Staff name</Text>
                  <Input type="text" placeholder='Savio'/>
          </Inputhold> */}

          <Inputhold>
              <Text>Amount</Text>
                  <Input {...register("amount")}  type="number" placeholder='$300.00'/>
                  <p>{errors?.amount && errors?.amount?.message} </p>
          </Inputhold>
          
          <Down>
              <button onClick={()=>{
                onSubmit()
              }}>Send</button>
          </Down>
    </Container>
  )
}

export default Pay
const Down = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: 50px;
    button{
        width: 130px;
        height: 45px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        outline: none;
        border-radius: 10px;
        color: #fff;
        background-color: #0D71FA;
        cursor: pointer;
    }
`
const Input = styled.input`
    width: 400px;
    margin-left: 60px;
    height: 45px;
    border-radius: 12px;
    padding-left: 15px;
    border: 1px solid gray;
    outline: none;
    font-size: 17px;
`
const Text = styled.div`
    width: 150px;
    @media screen and (max-width: 500px) {
      width: 100%;
    }
`
const Inputhold = styled.div`
    display: flex;
    margin-top: 60px;
    align-items: center;
`
const Top = styled.div`
    h3{
        font-size: 20px;
        margin: 0;
    }
`

const Container = styled.div`
    width: 57%;
    display: flex;
    height: 100%;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    padding: 30px;
    margin-top: 30px;
    flex-direction: column;
    margin-bottom: 30px;
    background-color: #fff;
    border-radius: 12px;
    margin-left: 270px;
    @media screen and (max-width: 1024px) {
        margin-left: 0px;
        width: 93%;
        /* background-color: red; */
    }
`