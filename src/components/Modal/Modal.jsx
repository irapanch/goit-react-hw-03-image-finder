import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
      <div className="overlay" onClick={this.onBackDropClick}>
        <div className="modal">
          <img src={this.props.modalImage} alt={this.props.altModal} />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  handleToggleModal: PropTypes.func,
  modalImage: PropTypes.string,
  altModal: PropTypes.string,
};
