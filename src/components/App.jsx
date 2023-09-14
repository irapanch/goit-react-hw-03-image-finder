import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { StyledApp } from 'styles/App.Styled';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
// import contactsData from '../assets/contacts.json';
// import ContactForm from './ContactForm';
// import Filter from './Filter';
// import { ContactList } from './ContactList';

class App extends Component {
  state = {};
  //++++++++++++++++++

  render() {
    return (
      <StyledApp>
        <Searchbar />
        <ImageGallery />
        <Button />
        <Modal />
      </StyledApp>
    );
  }
}

export default App;
