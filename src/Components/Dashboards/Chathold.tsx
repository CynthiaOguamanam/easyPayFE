import React from 'react'
import styled from 'styled-components';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Chathold = () => {

    const data = [
  { name: 'Jan', sales: 1000 },
  { name: 'Feb', sales: 2000 },
  { name: 'Mar', sales: 3000 },
  { name: 'Apr', sales: 2000 },
  { name: 'May', sales: 5000 },
  { name: 'Jun', sales: 1300 },
      { name: 'Jul', sales: 1800 },
      { name: 'Aug', sales: 2000 },
  { name: 'Sept', sales: 1200 },
      { name: 'Oct', sales: 6000 },
      { name: 'Nov', sales: 22000 },
  { name: 'Dec', sales: 1000 },
];

  return (
    <Container>
      <Top></Top>
          <LineChart width={1000} height={300} data={data}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Line type="monotone" dataKey="sales" stroke="#8884d8" activeDot={{ r: 8 }} />
</LineChart>
    </Container>
  )
}

export default Chathold
const Top = styled.div`
  width: 100%;
`

const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: #fff;
    flex-direction: column;
    margin-top: 40px;
`