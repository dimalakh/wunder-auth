export const isValid = (state, propNames) => {
  for (let name of propNames) {
    if (!state.data[name]) return false;
  }
  return true;
};
