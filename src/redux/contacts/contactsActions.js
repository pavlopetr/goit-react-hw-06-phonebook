import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';

const addContacts = createAction('contacts/add', data => ({
  payload: {
    id: nanoid(),
    name: data.name,
    number: data.number,
  },
}));
const deleteContacts = createAction('contacts/delete');
const chengeFilter = createAction('contactc/filter');

// eslint-disable-next-line
export default { addContacts, deleteContacts, chengeFilter };