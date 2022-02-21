import React from 'react';
import { render, screen } from '@testing-library/react';
import HistoryPanel from './index';

jest.mock('../../../mocks/historyMock');

describe('historyPanel', () => {
  it('Should correctly render history dropdown', () => {
    render(<HistoryPanel open={true} setHistoryOpen={() => null} />);

    const component = screen.getByText('You searched for:');

    expect(component).toBeInTheDocument();
  });
});

