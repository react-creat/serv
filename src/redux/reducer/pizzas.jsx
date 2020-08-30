const initialState = {
  items: [],
  isLoad: false,
};

function pizzas(state = initialState, action) {
  switch (action.type) {
    case 'ADD_PIZZAS':
      return {
        ...state,
        items: action.payload,
        isLoad: true,
      };
    default:
      return state;
  }
}

export default pizzas;