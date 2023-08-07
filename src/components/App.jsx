import React from 'react';

import { DivSection, Title, TitleTwo } from './App.styled';
import { Form } from './Form/Form';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = ({ name, number, id }) => {
    const { contacts } = this.state;

    if (contacts.find(item => item.name === name)) {
      return alert(` ${name} is already in contacts.`);
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id, name, number }],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = evt => {
    //     console.log(evt.currentTarget.value);
    this.setState({ filter: evt.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalisedFilter = filter.toLowerCase();

    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(normalisedFilter);
    });
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();

    return (
      <DivSection>
        <Title>PhoneBook</Title>
        <Form onSubmit={this.addContact} />
        <TitleTwo>Contacts</TitleTwo>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactList items={visibleContacts} onDelete={this.deleteContact} />
      </DivSection>
    );
  }
}
