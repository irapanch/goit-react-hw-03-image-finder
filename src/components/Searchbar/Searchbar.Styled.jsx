import { styled } from 'styled-components';

export const StyledSearchbar = styled.header`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: 50px;
`;
/* ================ INPUT ====================== */
export const StyledContainer = styled.form`
  margin-left: auto;
  margin-right: auto;
  width: 400px;
  height: 50px;
  overflow: hidden;
  vertical-align: middle;
  white-space: nowrap;
`;

export const StyledBtn = styled.button`
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border: none;
  background: #76787c;
  height: 50px;
  width: 50px;
  color: #c0c5ca;
  opacity: 0;
  font-size: 10pt;
  transition: all 0.55s ease;

  &:hover {
    background: rgb(202, 120, 120);
  }
`;

export const StyledInput = styled.input`
  width: 400px;
  height: 50px;
  background: #2b303b;
  border: none;
  font-size: 14pt;
  float: left;
  color: #fff;
  padding-left: 15px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  &::-webkit-input-placeholder {
    color: #65737e;
  }

  &:-moz-placeholder {
    /* Firefox 18- */
    color: #65737e;
  }

  &::-moz-placeholder {
    /* Firefox 19+ */
    color: #65737e;
  }
  &::-moz-placeholder {
    /* Firefox 19+ */
    color: #65737e;
  }
  &:hover {
    & ~ ${StyledBtn} {
      outline: none;
      margin-left: -50px;
      opacity: 1;
    }
  }

  &:focus {
    & ~ ${StyledBtn} {
      outline: none;
      margin-left: -50px;
      opacity: 1;
    }
  }

  &:active {
    & ~ ${StyledBtn} {
      outline: none;
      margin-left: -50px;
      opacity: 1;
    }
  }
`;
