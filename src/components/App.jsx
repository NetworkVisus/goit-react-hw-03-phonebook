import { Component } from 'react';
import { Form } from './Form/Form';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import * as Styled from './App.styled';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = newContact => {
    const alreadyExist = this.state.contacts.find(
      el =>
        el.name.toLowerCase().trim() === newContact.name.toLowerCase().trim()
    );

    if (alreadyExist) {
      alert(
        'This user is already in the list, try to delete it and add a new one'
      );
      return;
    }
    this.setState(prev => ({
      contacts: [...prev.contacts, newContact],
    }));
  };

  handleFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  filteredNames = () => {
    let filterTmp = this.state.filter;
    const filteredContacts = this.state.contacts.filter(el =>
      el.name.toLowerCase().includes(filterTmp.toLowerCase().trim())
    );
    return filteredContacts;
  };

  handleDelete = event => {
    this.setState(prev => ({
      contacts: [
        ...prev.contacts.filter(element => element.id !== event.target.id),
      ],
    }));
  };

  componentDidMount() {
    const localData = localStorage.getItem('contacts');
    if (localData) this.setState({ contacts: JSON.parse(localData) });
    else this.setState({ contacts: [] });
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts.length) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    return (
      <Styled.MainDiv>
        <h1>Phonebook</h1>
        <Form addContact={this.addContact}></Form>
        <h2>Contacts</h2>
        {this.state.contacts.length > 0 && (
          <Filter handleFilter={this.handleFilter}></Filter>
        )}
        <Contacts
          items={this.filteredNames()}
          handleDelete={this.handleDelete}
        ></Contacts>
      </Styled.MainDiv>
    );
  }
}
