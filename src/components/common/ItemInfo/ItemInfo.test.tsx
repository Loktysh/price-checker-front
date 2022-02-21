import React, { useState as mockState } from 'react';
import { screen, render, act } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../store/store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ItemInfo from './index';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: jest.fn(),
}));

describe('AppFooter', () => {
  const setState = jest.fn();

  beforeEach(() => {
    (mockState as jest.Mock).mockImplementation(init => [init, setState]);
  });

  it('Should correctly render the item information', () => {
    act(() => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<ItemInfo />} />
            </Routes>
          </BrowserRouter>
        </Provider>,
      );
    });

    const footerComponent = screen.getByText('View product price chart and compare prices:');

    expect(footerComponent).toBeInTheDocument();
  });
});
