export default (state, action) => {
  if (action.type === "DELETE_CALORIEEVENT") {
    return {
      ...state,
      calorieEvents: state.calorieEvents.filter(
        (transaction) => transaction._id !== action.payload
      ),
    };
  } else if (action.type === "ADD_CALORIEEVENT") {
    return {
      ...state,
      calorieEvents: [...state.calorieEvents, action.payload],
    };
  } else if (action.type === "GET_CALORIEEVENTS") {
    return {
      ...state,
      loading: false,
      calorieEvents: action.payload,
    };
  }
};
