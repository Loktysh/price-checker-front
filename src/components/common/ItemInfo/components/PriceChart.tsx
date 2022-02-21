import React, { FC } from 'react';
import {
  LineChart,
  Line,
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';
import { Spinner } from '../../../typography';
import { COLOR_GREEN_100 } from '../../constants/colors';
import { PriceChartItem } from '../../types/index';

type ChartProps = {
  data: PriceChartItem[] | undefined;
};

const PriceChart: FC<ChartProps> = ({ data }) => {
  if (data) {
    return (
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray='5 5' />
          <XAxis dataKey='date' />
          <YAxis />
          <Tooltip />
          <Line type='monotone' dataKey='price' stroke={COLOR_GREEN_100} />
        </LineChart>
      </ResponsiveContainer>
    );
  } else {
    return <Spinner size='4rem' />;
  }
};

export default PriceChart;
