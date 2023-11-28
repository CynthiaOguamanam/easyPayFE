import React from "react";

import styled from "styled-components";


import { useQuery } from "@tanstack/react-query";
import { UseAppSelector } from "../Global/Store";
import { getOneAdmin } from "../api/adminEndpoints";

const Recent = () => {
  const user = UseAppSelector((state) => state.Admin);
  const getAdmin = useQuery({
    queryKey: ["singleAdmin"],
    queryFn: () => getOneAdmin(user?._id),
  });

  return (
    <Container>
      <Wrapper>
        <Title>Latest transactions</Title>
        <Table>
          <table>
            <tr>
              <th>Receiver</th>
              <th>Type</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
              <tr>
              <td>
                <Hold>
                  <Circle></Circle>
                <Name>Okwoli Godwin</Name>
                </Hold>
              </td>
              <td>
                <Text>Salary</Text>
                </td>
              <td> 
                $3,500
              </td>
              <td>
                4, April, 2023
              </td>
              <td> 
                <Stat>Pending</Stat>
              </td>
            </tr>
            
            <tr>
              <td>
                <Hold>
                  <Circle></Circle>
                <Name>Ogbu Esther</Name>
                </Hold>
              </td>
              <td>
                <Text>Salary</Text>
                </td>
              <td> 
                $2,500
              </td>
              <td>
                4, April, 2023
              </td>
              <td> 
                <Stat2>Done</Stat2>
              </td>
            </tr>
            
            <tr>
              <td>
                <Hold>
                  <Circle></Circle>
                <Name>Ovouke Esther</Name>
                </Hold>
              </td>
              <td>
                <Text>Salary</Text>
                </td>
              <td> 
                $1,500
              </td>
              <td>
                4, April, 2023
              </td>
              <td> 
                <Stat3>Failed</Stat3>
              </td>
              </tr>
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
const Delete = styled.div`
  width: 100px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid gray;
  border-radius: 50px;
`
const Stat2 = styled.div`
  width: 100px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: green;
  background-color: #c6f0c6;
  border-radius: 50px;
`
const Stat3 = styled.div`
  width: 100px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: red;
  background-color: #fcc9c9;
  border-radius: 50px;
`
const Stat = styled.div`
  width: 70px;
  height: 30px;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: orangered;
  background-color: #fcbea8;
  border-radius: 50px;
`
const Text = styled.div`
  
`
const Hold = styled.div`
  display: flex;
  align-items: center;
`
const Name = styled.div`
  margin-left: 10px;
`
const Circle = styled.div`
  width: 30px;
  height: 30px;
  background-color: red;
  border-radius: 50px;
`

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
