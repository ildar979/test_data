export const taskSelector = {
  getProp: (propKey) =>
    (state) => state.tasks[propKey],
  getState: (state) => state.tasks,
};

export const perSelector = {
  getProp: (propKey) =>
    (state) => state.per[propKey],
  getState: (state) => state.per,
};
