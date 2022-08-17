import { useSelector, useDispatch } from 'react-redux';
import action from '../../redux/contacts/contactsActions';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import s from './ContactList.module.css';

const ContactList = () => {
  const filter = useSelector(state => state.contacts.filter);
  const contacts = useSelector(state => state.contacts.item);
  const dispatch = useDispatch();

  const getVisibleFilterList = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <ul className={s.list}>
      {getVisibleFilterList().map(({ name, number, id }) => (
        <li key={nanoid()} className={s.item}>
          <span className={s.span}>{name}:</span>
          <span>{number}</span>
          <button
            className={s.btn}
            type="button"
            onClick={() => dispatch(action.deleteContacts(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  onDeleteContact: PropTypes.func,
};

export default ContactList;