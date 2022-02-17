import React, { FC } from 'react';
import { StyledStar } from '../../typography';

type RatingProps = {
  ratingArr: boolean[];
};

const StarRating: FC<RatingProps> = ({ ratingArr }) => {
  return (
    <div>
      {ratingArr.map((elem, index) => {
        return <StyledStar enabled={elem.toString()} key={index} />;
      })}
    </div>
  );
};

export default StarRating;
