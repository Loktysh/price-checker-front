import React from 'react';
import { screen, render } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import ProductElement from '../AppHeader/ProductElement';
import StarRating from './StarRating';

describe('StarRating', () => {
  it('Should correctly render star rating when given an array', () => {
    const array = new Array(5).fill(true);

    render(
      <BrowserRouter>
        <StarRating ratingArr={array} />
      </BrowserRouter>,
    );

    const stars = screen.getAllByTestId('style-star');

    expect(stars).toHaveLength(5);
  });
});
