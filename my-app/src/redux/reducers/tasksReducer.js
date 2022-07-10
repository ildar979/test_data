import { taskState } from "../initState";

export const tasksReducer = (state = taskState, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'GET_TASKS':
      return { ...state, tasks: payload }
    default:
      return state
  }
} 
