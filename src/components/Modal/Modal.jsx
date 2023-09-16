import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyledModal, StyledOverlay } from './Modal.Styled';

export class Modal extends Component {
  componentDidMount() {
    document.body.style.overflow = 'hidden';

    document.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    document.body.style.overflow = 'auto';

    document.removeEventListener('keydown', this.handleKeyDown);
  }
  handleKeyDown = e => {
    if (e.key === 'Escape') {
      this.props.handleToggleModal();
    }
  };
  onBackDropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.handleToggleModal();
    }
  };

  render() {
    return (
      <StyledOverlay onClick={this.onBackDropClick}>
        <StyledModal>
          <img src={this.props.modalImage} alt={this.props.altModal} />
        </StyledModal>
      </StyledOverlay>
    );
  }
}

Modal.propTypes = {
  handleToggleModal: PropTypes.func,
  modalImage: PropTypes.string,
  altModal: PropTypes.string,
};
