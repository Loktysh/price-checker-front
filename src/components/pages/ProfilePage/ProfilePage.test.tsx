import React from 'react';
import * as redux from 'react-redux';
import { screen, render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ProfilePage from './ProfilePage';

const selectorSpy = jest.spyOn(redux, 'useSelector');

describe('ProfilePage', () => {
  it('Should correctly render the profile when not logged in', () => {
    selectorSpy.mockReturnValue(false);
    render(
      <BrowserRouter>
        <ProfilePage />
      </BrowserRouter>,
    );

    const loginButton = screen.getByTestId('profile-login');
    expect(loginButton).toBeInTheDocument();
  });
});
