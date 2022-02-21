import React from 'react';
import { screen, render, act } from '@testing-library/react';
import ProfileList from './index';
import { Provider } from 'react-redux';
import { store } from '../../../store/store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

describe('AppFooter', () => {
  it('Should correctly render the profile', () => {

    act(() => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<ProfileList />} />
            </Routes>
          </BrowserRouter>
        </Provider>,
      );
    });

    const footerComponent = screen.getByText('Load more items');

    expect(footerComponent).toBeInTheDocument();
  });
});
