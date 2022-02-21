import React from 'react';
import { screen, render } from '@testing-library/react';
import ProductElement from './ProductElement';
import { Product } from '../types';
import { BrowserRouter } from 'react-router-dom';

const closeMock = () => null;

describe('AppHeader/ProductElement', () => {
  it('Should correctly render an element with correct data', () => {
    const productMock: Product = {
      id: 1,
      key: 'key',
      extended_name: 'ext',
      description: 'foo',
      rating: 5,
      image: 'bar',
      price_min: '100',
    };

    render(
      <BrowserRouter>
        <ProductElement item={productMock} closeDropdownOnQuery={closeMock} />
      </BrowserRouter>,
    );

    const nameComponent = screen.getByText('ext');
    expect(nameComponent).toBeInTheDocument();
    expect(nameComponent).toContainHTML('ext');
  });
});
