import * as types from './ActionTypes';

const initialState = {
  rows: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_DATA: {
      return {
        ...state,
        rows: action.rows
    }
  }
    default:
      return state
  }
};
