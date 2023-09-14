import React from 'react';
import {
  StyledBtn,
  StyledContainer,
  StyledInput,
  StyledSearchbar,
} from './Searchbar.Styled';

export const Searchbar = () => {
  return (
    <StyledSearchbar>
      <StyledContainer>
        <StyledInput
          type="text"
          autoComplete="off"
          placeholder="Search images..."
        />
        <StyledBtn type="submit">
          <i className="fa fa-search"></i>
        </StyledBtn>
      </StyledContainer>
    </StyledSearchbar>
  );
};
