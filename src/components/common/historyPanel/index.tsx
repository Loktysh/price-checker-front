import React, { FC } from 'react';
import {
  StyledCloseButton,
  StyledHistoryHeading,
  StyledHistoryItem,
  StyledHistoryPanel,
  StyledHistoryLink,
} from './styled';
import { historyMock } from '../../../mocks/historyMock';
import { getStorageItem } from '../../../utils';

type HistoryProps = {
  open: boolean;
  setHistoryOpen: (value: boolean | ((prevVar: boolean) => boolean)) => void;
};

const HistoryPanel: FC<HistoryProps> = ({ open, setHistoryOpen }) => {
  const historyItems = getStorageItem('history');
  return (
    <StyledHistoryPanel open={open}>
      <StyledCloseButton onClick={() => setHistoryOpen(false)} />
      <StyledHistoryHeading>You searched for:</StyledHistoryHeading>

      {historyItems &&
        historyItems.map((elem: string, idx: number) => {
          return (
            <StyledHistoryItem key={idx} onClick={() => setHistoryOpen(false)}>
              <StyledHistoryLink to={'/products/' + elem}>{elem}</StyledHistoryLink>
            </StyledHistoryItem>
          );
        })}
    </StyledHistoryPanel>
  );
};

export default HistoryPanel;
