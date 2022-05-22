import { createStore, Reducer } from "redux";
import { TODO_COMPLETE, TODO_INCOMPLETE } from "./Actions";

type state = { completed: number; incomplete: number };

const initialState: state = { completed: 0, incomplete: 0 };

export const reducer: Reducer<state> = (
  currentState = initialState,
  action
) => {
  switch (action.type) {
    case TODO_COMPLETE: {
      return { ...currentState, completed: currentState.completed + 1 };
    }
    case TODO_INCOMPLETE: {
      return { ...currentState, incomplete: currentState.incomplete + 1 };
    }
    default: {
      return currentState;
    }
  }
};
const store = createStore(reducer);

export default store;
