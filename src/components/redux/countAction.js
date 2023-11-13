import { ADD, DELETE, RESET } from "./actionTypes";

const addCount = () => {
  return {
    type: ADD,
  };
};

const deleteCount = () => {
  return {
    type: DELETE,
  };
};
const resetCount = () => {
  return {
    type: RESET,
  };
};

export { addCount, deleteCount, resetCount };
