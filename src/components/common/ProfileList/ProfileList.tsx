import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import {
  ProfileButton,
  ProfileParagraph,
  StyledMoreButton,
  StyledProfileH,
  StyledProfileHeading,
  StyledProfileImage,
  StyledProfileItem,
  StyledProfilePrice,
  StyledProfileWrapper,
  ProductLinkWrapper,
} from './styled';
import { Flex } from '../../typography';
import { fetchProduct } from '../../../utils';
import { ExtendedProductInfo } from '../ItemInfo/ItemInfo';
import { COLOR_GREEN_100 } from '../constants/colors';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  flex-grow: 1;
`;

const ITEMS_PER_PAGE = 10;

const ProfileList = () => {
  const userName = useSelector((state: RootState) => state.login.userLogin);
  const trackedItemsArray = useSelector((state: RootState) => state.tracking.tracked);
  const [fetchedItems, setFetchedItems] = useState<ExtendedProductInfo[]>([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const itemsByPage = trackedItemsArray.slice(
      currentPage * ITEMS_PER_PAGE,
      currentPage * ITEMS_PER_PAGE + ITEMS_PER_PAGE,
    );
    Promise.all(itemsByPage.map((elem: string) => fetchProduct(elem))).then(
      (products: ExtendedProductInfo[]) => {
        if (currentPage === 0) {
          setFetchedItems(products);
        } else {
          setFetchedItems([...fetchedItems, ...products]);
        }
      },
    );
  }, [trackedItemsArray, currentPage]);

  return (
    <Container>
      <StyledProfileHeading justify='flex-start'>
        <StyledProfileH>
          Welcome back, {userName}. Take a look at your tracked items:
        </StyledProfileH>
      </StyledProfileHeading>
      <StyledProfileWrapper direction='column'>
        {fetchedItems.map((elem: ExtendedProductInfo) => (
          <StyledProfileItem key={elem.key}>
            <Flex justify='flex-start' wrap='nowrap' gap='0.5rem'>
              <StyledProfileImage bgImage={elem.image} />
              <ProfileParagraph>{elem.extended_name}</ProfileParagraph>
            </Flex>
            <ProductLinkWrapper>
              <Link to={'/product/' + elem.key}>
                <ProfileButton color={COLOR_GREEN_100}>Go to item page</ProfileButton>
              </Link>
              <StyledProfilePrice>Price: from {elem.price_min} BYN</StyledProfilePrice>
            </ProductLinkWrapper>
          </StyledProfileItem>
        ))}
        <StyledMoreButton color={COLOR_GREEN_100} onClick={() => setCurrentPage(currentPage + 1)}>
          Load more items
        </StyledMoreButton>
      </StyledProfileWrapper>
    </Container>
  );
};

export default ProfileList;
