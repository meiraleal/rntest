import * as types from './ActionTypes';

const initialState = {
  rows: [],
  form: {
    name: null,
    date: null,
    venueCity: null,
    venueState: null
  }
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_DATA: {
      return {
        ...state,
        rows: action.rows
    }
  }
  case types.HANDLE_DATA: {
    let form = state.form;
    form[action.field] = action.value;
    return {
      ...state,
      ...form
    }
  }
  case types.ADD: {
    let newRows = [...state.rows];
    newRows.push(action.item);
    return {
      ...state,
      rows: newRows
    }
  }
  default:
    return state
  }
};
