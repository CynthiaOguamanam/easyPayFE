import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { getAllClients } from "../api/staffEndpoints";
import { useQuery } from "@tanstack/react-query";
import { getOneAdmin } from "../api/adminEndpoints";
import { UseAppSelector } from "../Global/Store";

const Recent = () => {
  const user = UseAppSelector((state) => state.Admin);
  const getAdmin = useQuery({
    queryKey: ["singleAdmin"],
    queryFn: () => getOneAdmin(user?._id),
  });

  return (
    <Container>
      <Wrapper>
        <Title>List Of Staff</Title>

        <Table>
          <table>
            <tr>
              <th>Staff</th>
              <th>Role</th>
              <th>companyname</th>
            </tr>
            {getAdmin?.data?.data?.viewUser.map((el: any) => (
              <tr key={el?._id}>
                <td>{el?.yourName} </td>
                <td>{el?.position}</td>
                <td>{el.companyname} </td>
              </tr>
            ))}
          </table>
        </Table>

        <BtnHold>
                <Button>View More</Button>
        </BtnHold>
      </Wrapper>
    </Container>
  );
};

export default Recent;

const Container = styled.div`
  width: 93%;
  display: flex;
  height: 100%;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 30px;
  margin-top: 30px;
  flex-direction: column;
  background-color: #fff;
  @media screen and (max-width: 500px) {
    padding: 20px;
  }
`;

const Wrapper = styled.div`
  padding: 20px;
`;

const Title = styled.div`
  font-weight: bold;
  margin-bottom: 20px;
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

const BtnHold = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  height: 35px;
  width: 150px;
  margin-top: 15px;
  font-family: poppins;
  border: 1px solid #0d71fa;
  /* color: #6d6d6e; */
  color: #0d71fa;
  border-radius: 2px;
  font-size: 13px;
  font-weight: 600;
  background-color: transparent;
  cursor: pointer;
  /* margin-right: 10px; */
  transition: all 350ms;
  :hover {
    transform: scale(0.98);
  }
  @media (max-width: 500px) {
    height: 40px;
    width: 100px;
    font-size: 12px;
    margin-left: 10px;
    margin-right: 10px;
  }
`;
