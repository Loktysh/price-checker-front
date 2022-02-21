import React, { FC, useEffect, useState } from 'react';
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
import { Link, Params } from 'react-router-dom';
import styled from 'styled-components';
import { API_LINK } from '../constants';

type ProfileProps = {
  user: Readonly<Params<string>>;
};

const Container = styled.div`
  flex-grow: 1;
`;

const ITEMS_PER_PAGE = 10;

const ProfileList: FC<ProfileProps> = ({ user }) => {
  const currentUser = useSelector((state: RootState) => state.login.userLogin);
  const [trackedItems, setTrackedItems] = useState<string[]>([]);
  const [fetchedItems, setFetchedItems] = useState<ExtendedProductInfo[]>([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    fetch(API_LINK + `profile?user=${user.user}`)
      .then((res: Response) => res.json())
      .then(data => {
        console.log(data);
        setTrackedItems(data);
      });
  }, [user.user]);

  useEffect(() => {
    const itemsByPage = trackedItems.slice(
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
  }, [trackedItems, currentPage]);

  return (
    <Container>
      <StyledProfileHeading justify='flex-start'>
        <StyledProfileH>
          {currentUser === user.user
            ? 'Welcome back. Take a look at your tracked items:'
            : `Take a look at items tracked by ${user.user}:`}
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
