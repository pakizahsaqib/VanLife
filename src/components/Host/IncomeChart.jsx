import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'January', transaction: 1000 },
  { month: 'February', transaction: 2000 },
  { month: 'March', transaction: 400 },
  { month: 'April', transaction: 5000 },
  { month: 'May', transaction: 2780 },
  { month: 'June', transaction: 1060 },
];

const IncomeChart = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="transaction" fill="#FF8C38" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default IncomeChart;
