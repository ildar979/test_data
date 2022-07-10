import { taskState } from '../initState';

export const tasksReducer = (state = taskState, action) => {
  const { type, peyload } = action;
  switch (type) {
    case 'GET_TASKS':
      return { ...state, tasks: peyload }
    default:
      break;
  }
}
