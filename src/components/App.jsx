import { ContactForm } from "./ContactForm/ContactForm";
import { useState, useEffect } from "react";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import { GlobalStyle } from "./GlobalStyles";
import { Layout } from "./Layout";

export const App = () => {
  const [contacts, setContacts] = useState(() => {
       const savedContacts = localStorage.getItem('contacts');
    if (savedContacts !== null) {
      const parsedContacts = JSON.parse(savedContacts);
      return parsedContacts;
    }
    return []; 
  });
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])

  const addContact = (newContact) => {
    const sameName = contacts.map(contact => contact.name).includes(newContact.name);

    if (sameName) {
      alert(`${newContact.name} is already in contacts`)
    } else {
      setContacts(prevState => [...prevState, newContact])
        };
    };
  

 const filterContact = (filter) => {
   setFilter(filter);
  }

 const findContact = () => {
 return contacts.filter((contacts) =>
      contacts.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const deleteContact = (contactId) => {
    setContacts(prevState =>  prevState.filter(contact => contact.id !== contactId));
      }

  
    return (
      <Layout>
        <GlobalStyle/>
        <h1>Phonebook</h1>
        <ContactForm onSave={addContact} />

        <h2>Contacts</h2>
          <Filter value={filter} onFind={filterContact} />
        <ContactList contacts={findContact()} onDelete={deleteContact} />

      </Layout>
    )
  }

