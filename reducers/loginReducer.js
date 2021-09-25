import {LOGIN} from '../types';

const initialState = {
  email: '',
  password: '',
  submitted: false,
};

export default function loginreducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
}
