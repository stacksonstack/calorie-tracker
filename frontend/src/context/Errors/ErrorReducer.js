export default (state, action) => {
  if (action.type === "GET_ERRORS") {
    return {
      message: action.payload.message,
      status: action.payload.status,
      id: action.payload.id,
    };
  } else if (action.type === "CLEAR_ERRORS") {
    return {
      message: {},
      status: null,
      id: null,
    };
  } else {
    return state;
  }
};

//in case of emergency (...state)
