import { Contact } from "components/Contact/Contact"
import PropTypes from "prop-types";

export const ContactList = ({contacts, onDelete}) => {
    return (
        <ul>
            {contacts.map(contact => (<Contact key={contact.id} contact={contact} onDelete={onDelete} />))}    
      </ul>
  )  
}

ContactList.propTypes = {
    contacts: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
}
