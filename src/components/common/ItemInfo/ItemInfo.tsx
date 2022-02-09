import React from 'react';
import { useParams } from 'react-router-dom';
import { StyledChartCard, StyledInfoCard, StyledInfoContainer } from './styled';
import PriceChart from './PriceChart';

const ItemInfo = () => {
  const { id } = useParams();

  const selectButtons = [
    {
      name: 'One week',
      type: 'week1',
    },
    {
      name: 'One month',
      type: 'month1',
    },
    {
      name: 'Three months',
      type: 'month3',
    },
  ];

  return (
    <StyledInfoContainer direction='column' justify='flex-start'>
      <StyledInfoCard />
      <StyledChartCard>
        <PriceChart />
      </StyledChartCard>
    </StyledInfoContainer>
  );
};

export default ItemInfo;
