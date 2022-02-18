interface IChartMock {
  data: DataItem[];
  type: string;
}

interface DataItem {
  period: string;
  price: number;
}

export const chartMockMonths: IChartMock = {
  type: 'month',
  data: [
    {
      period: 'Oct',
      price: 1000,
    },
    {
      period: 'Nov',
      price: 1000,
    },
    {
      period: 'Dec',
      price: 980,
    },
    {
      period: 'Jan',
      price: 1100,
    },
    {
      period: 'Feb',
      price: 1050,
    },
  ],
};
