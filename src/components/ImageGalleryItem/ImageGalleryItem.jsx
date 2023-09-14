import React from 'react';
import { StyledItem, StyledImg } from './ImageGalleryItem.Styled';

export const ImageGalleryItem = () => {
  return (
    <StyledItem>
      <StyledImg src="${webformatURL}" alt="${tags}" loading="lazy" />
    </StyledItem>
  );
};
