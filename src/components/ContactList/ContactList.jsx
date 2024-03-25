import PropTypes from 'prop-types';
import './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map(contact => (
      <li key={contact.id}>
        <div>
          {contact.name}: {contact.number}
        </div>
        <button type="button" onClick={() => onDeleteContact(contact.id)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
