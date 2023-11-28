import { useQuery } from "@tanstack/react-query";
import React from "react";
import styled from "styled-components";
import img from "../Assets/21.jpeg";
import { getAllClients } from "../api/staffEndpoints";
import { UseAppSelector } from "../Global/Store";
import { getOneAdmin } from "../api/adminEndpoints";
const Recent = () => {
  const user = UseAppSelector((state)=> state.Admin)
  const getAdmin = useQuery({
    queryKey: ["singleAdmin"],
    queryFn: () => getOneAdmin(user?._id),
  });


  return (
    <Container>
      <div>
        <Title>Latest transactions</Title>
        <Boxhold></Boxhold>
        <Table>
          <table>
            <tr>
              <th>Staff</th>
              <th>Role</th>
              <th>Joined</th>
            </tr>
            {
 getAdmin?.data?.data?.viewUser.map((el:any)=>(
  <tr key={el?._id}>
              <td>{el?.yourName} </td>
              <td>{el?.position}</td>
              <td>{el.companyname} </td>
            </tr>
 ))
            }
            </table>
        </Table>
    
        
        
        
      </div>
    </Container>
  );
};

export default Recent;
const Title = styled.div`
  font-weight: bold;
  margin-bottom: 20px;
`;
const Table2 = styled.div`
  overflow-x: auto;
  font-size: 14px;
  table {
    width: 100%;
  }
  table,
  th,
  td {
    border: 1px solid lightgray;
    border-collapse: collapse;
  }
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
  th,
  td {
    padding: 15px 10px;
    text-align: left;
  }
  th {
    font-size: 13px;
    background-color: #0d71fa;
    color: #fff;
  }
`;
const Table = styled.div`
  overflow-x: auto;
  font-size: 14px;
  table {
    width: 100%;
  }
  table,
  th,
  td {
    border: 1px solid lightgray;
    border-collapse: collapse;
  }
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
  th,
  td {
    padding: 15px 10px;
    text-align: left;
  }
  th {
    font-size: 13px;
    background-color: #0d71fa;
    color: #fff;
  }
`;
const Button = styled.div`
  width: 120px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-color: #03993f;
  border-radius: 50px;
  cursor: pointer;
`;
const View = styled.div`
  width: 100%;
  display: flex;
  margin-top: 30px;
  justify-content: center;
  align-items: center;
`;
const Joined = styled.div``;
const Role = styled.div`
  width: 200px;
  /* background-color: green; */
  margin-right: 90px;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 500px) {
    background-color: red;
    margin-right: 12px;
    /* margin-left: 30px; */
    width: 0px;
  }
`;
const Img = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
`;
const Name = styled.div`
  display: flex;
  margin-left: 10px;
  @media screen and (max-width: 500px) {
    width: 50px;
    /* background-color: red; */
  }
`;
const Circle = styled.div`
  width: 45px;
  height: 45px;
  border: 1px solid #fff;
  background-color: #0d71fa;
  /* background-color: red; */
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  overflow: hidden;
  @media screen and (max-width: 500px) {
    width: 40px;
    height: 40px;
    border-radius: 50px;
  }
`;
const Profilehold = styled.div`
  display: flex;
  align-items: center;
`;
const Hold = styled.div`
  height: 40px;
  width: 100%;
  display: flex;
  margin-top: 10px;
  justify-content: space-between;
  background-color: blue;
  align-items: center;
`;
const Navs2 = styled.div`
  color: #5a5a5a;
  font-size: 18px;
`;
const Navs = styled.div`
  color: #fff;
  font-size: 18px;
  cursor: pointer;
`;
const Head2 = styled.div`
  background-color: #f6f7f9;
  height: 80px;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  display: flex;
  /* height: 100%; */
  /* height: 60px; */
  padding-left: 10px;
  padding-right: 10px;
`;
const Head = styled.div`
  margin-top: 15px;
  justify-content: space-between;
  background-color: #0d71fa;
  align-items: center;
  display: flex;
  height: 70px;
  padding-left: 15px;
  padding-right: 15px;
  position: sticky;
  border-radius: 10px;
`;
const Boxhold = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;

  /* background-color: red; */
`;
const Top = styled.div`
  h2 {
    font-weight: bold;
  margin-bottom: 20px;
  }
`;

const Container = styled.div`
  width: 93%;
  display: flex;
  height: 100%;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 30px;
  margin-top: 30px;
  flex-direction: column;
  background-color: #fff;
  /* background-color: black; */
  margin-left: 260px;
  @media screen and (max-width: 500px) {
    padding: 20px;
  }
  @media screen and (max-width: 1024px) {
    margin-left: 0px;
  }
`;
