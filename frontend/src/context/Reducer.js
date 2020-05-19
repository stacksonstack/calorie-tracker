export default (state, action) => {
  if (action.type === "DELETE_CALORIEEVENT") {
    return {
      ...state,
      calorieEvents: state.calorieEvents.filter(
        (transaction) => transaction.id !== action.payload
      ),
    };
  } else if (action.type === "ADD_CALORIEEVENT") {
    return {
      ...state,
      calorieEvents: [action.payload, ...state.calorieEvents],
    };
  }
};
