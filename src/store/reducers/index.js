import { LOADFILMS } from "../actions";

export function reducer(state = {}, action) {
  console.log(state, action);
  switch (action.type) {
    case LOADFILMS: {
      return {
        ...state,
        films: action.payload
      };
    }
    default:
      return state;
  }
}
