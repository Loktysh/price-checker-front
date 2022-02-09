import React, { FC } from 'react';
import { FaTimes } from 'react-icons/fa';
import { StyledHistoryPanel } from './styled';

type HistoryProps = {
  open: boolean;
  setHistoryOpen: (value: boolean | ((prevVar: boolean) => boolean)) => void;
};

const HistoryPanel: FC<HistoryProps> = ({ open, setHistoryOpen }) => {
  return (
    <StyledHistoryPanel open={open}>
      <FaTimes onClick={() => setHistoryOpen(false)} />
      <p>History...</p>
    </StyledHistoryPanel>
  );
};

export default HistoryPanel;
