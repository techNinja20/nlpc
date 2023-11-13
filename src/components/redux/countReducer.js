import { ADD, DELETE, RESET } from "./actionTypes";

const initialState = {
  numOfItems: 0,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        numOfItems: state.numOfItems + 1,
      };

    case DELETE:
      return {
        ...state,
        numOfItems: state.numOfItems - 1,
      };
    case RESET:
      return {numOfItems: state.numOfItems = 0 };
    default:
      return state;
  }
};
