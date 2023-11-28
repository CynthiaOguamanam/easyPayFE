import React from 'react'
import {VictoryChart, VictoryBar, VictoryAxis, VictoryTheme} from "victory"

const Transacthold = () => {

    const data = [
  { month: 'Jan', income: 5000, expense: 4000 },
  { month: 'Feb', income: 7000, expense: 5000 },
  { month: 'Mar', income: 6000, expense: 7000 },
  { month: 'Apr', income: 8000, expense: 6000 },
  { month: 'May', income: 9000, expense: 8000 },
  { month: 'Jun', income: 10000, expense: 9000 },
];

  return (
      <div>
          <VictoryChart
  theme={VictoryTheme.material}
  domainPadding={{ x: 20 }}
  width={500}
  height={300}
>
  <VictoryAxis tickValues={data.map((d) => d.month)} />
  <VictoryAxis dependentAxis />
  <VictoryBar data={data} x="month" y="income" />
  <VictoryBar data={data} x="month" y="expense" />
</VictoryChart>
    </div>
  )
}

export default Transacthold