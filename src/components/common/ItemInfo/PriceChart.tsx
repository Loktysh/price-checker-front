import React from 'react';
import {
  LineChart,
  Line,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';
import { chartMockMonths } from '../../../mocks';

const PriceChart = () => {
  return (
    <ResponsiveContainer>
      <LineChart data={chartMockMonths.data}>
        <CartesianGrid strokeDasharray='5 5' />
        <XAxis dataKey='period' />
        <YAxis />
        <Tooltip />
        <Line type='monotone' dataKey='price' stroke='#8884d8' />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default PriceChart;
