import styled from 'styled-components';

export const StyledOverlay = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
  inset: 0;
`;

export const StyledModal = styled.div`
  max-width: 85%;
  max-height: auto;
`;
