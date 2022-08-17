import { combineReducers, createReducer } from '@reduxjs/toolkit';
import action from './contactsActions';

const item = createReducer([], {
  [action.addContacts]: (state, { payload }) =>
    state.find(({ name }) => name.toLowerCase() === payload.name.toLowerCase())
      ? alert(`${payload.name} is already in contacts!!!`)
      : [...state, payload],

  [action.deleteContacts]: (state, { payload }) =>
    state.filter(el => el.id !== payload),
});

const filter = createReducer('', {
  [action.chengeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  item,
  filter,
});