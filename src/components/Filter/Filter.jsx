import { useSelector, useDispatch } from 'react-redux';
import action from '../../redux/contacts/contactsActions';
import s from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = () => {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  return (
    <label className={s.label}>
      Find contacts by name
      <input
        type="text"
        value={filter}
        onChange={e => dispatch(action.chengeFilter(e.target.value))}
        className={s.input}
      />
    </label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  changeFilter: PropTypes.func,
};

export default Filter;