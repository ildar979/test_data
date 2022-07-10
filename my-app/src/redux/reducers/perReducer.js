import { pageState } from "../initState";

export const perReducer = (state = pageState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'SET_CURRENT_TASK':
      return { ...state,currentTask:payload }
    default:
      return state
  }
} 
