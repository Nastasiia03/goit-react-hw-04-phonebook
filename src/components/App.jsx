import { ContactForm } from "./ContactForm/ContactForm";
import { Component } from "react";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { GlobalStyle } from "./GlobalStyles";
import { Layout } from "./Layout";

export class App extends Component {
  state = {
    contacts: [],
    filter: "",
  }

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts !== null) {
      const parsedContacts = JSON.parse(savedContacts);
      this.setState({ contacts: parsedContacts });
      return;
    }
    this.setState({ contacts: [] });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = (newContact) => {
    const sameName = this.state.contacts.map(contact => contact.name).includes(newContact.name);

    if (sameName) {
      alert(`${newContact.name} is already in contacts`)
    } else {
      this.setState(prevState => {
        return {
          contacts: [...prevState.contacts, newContact],
        }
      })
    };
  }

  filterContact = (filter) => {
this.setState({filter})
  }

  findContact = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contacts) =>
      contacts.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  deleteContact = (contactId) => {
    this.setState(prevState => {
      return {
    contacts: prevState.contacts.filter(contact => contact.id !== contactId)
  }
})
  }
  
  render() {
    const findedContacts = this.findContact();
    return (
      <Layout>
        <GlobalStyle/>
        <h1>Phonebook</h1>
        <ContactForm onSave={this.addContact} />

        <h2>Contacts</h2>
          <Filter value={this.state.filter} onFind={this.filterContact} />
        <ContactList contacts={findedContacts} onDelete={this.deleteContact} />

      </Layout>
    )
  }
}
