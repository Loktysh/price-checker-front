import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import LoginDropdown from './LoginDropdown';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const SettingsPage = () => <p>Settings page</p>;

describe('AppHeader/LoginDropdown', () => {
  it('Should render the dropdown correctly', () => {
    render(
      <BrowserRouter>
        <LoginDropdown />
      </BrowserRouter>,
    );

    const component = screen.getByTestId('login-dropdown');

    expect(component).toBeInTheDocument();
  });

  it('Should correctly navigate to settings page', () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path='/settings' element={<SettingsPage />} />
          <Route path='/' element={<LoginDropdown />} />
        </Routes>
      </BrowserRouter>,
    );
    const button = screen.getByText('Settings');
    fireEvent.click(button);
    const component = screen.getByText('Settings page');
    expect(component).toBeInTheDocument();
  });
});
