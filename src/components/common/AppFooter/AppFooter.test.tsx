import React from 'react';
import { screen, render } from '@testing-library/react';
import { AppFooter } from './index';
import { Provider } from 'react-redux';
import { store } from '../../../store/store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

describe('AppFooter', () => {
  it('Should correctly render the footer', () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<AppFooter />} />
          </Routes>
        </BrowserRouter>
      </Provider>,
    );

    const footerComponent = screen.getAllByText('About Price Checker');

    expect(footerComponent.length).toBeGreaterThan(0);
  });
});
