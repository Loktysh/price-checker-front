import React, { FC } from 'react';
import {
  StyledCloseButton,
  StyledHistoryHeading,
  StyledHistoryItem,
  StyledHistoryPanel,
} from './styled';
import { historyMock } from '../../../mocks/historyMock';

type HistoryProps = {
  open: boolean;
  setHistoryOpen: (value: boolean | ((prevVar: boolean) => boolean)) => void;
};

const HistoryPanel: FC<HistoryProps> = ({ open, setHistoryOpen }) => {
  return (
    <StyledHistoryPanel open={open}>
      <StyledCloseButton onClick={() => setHistoryOpen(false)} />
      <StyledHistoryHeading>You searched for:</StyledHistoryHeading>

      {historyMock.map((elem: string, idx) => {
        return (
          <StyledHistoryItem key={idx} data-testid='history-item'>
            <span>{elem}</span>
          </StyledHistoryItem>
        );
      })}
    </StyledHistoryPanel>
  );
};

export default HistoryPanel;
