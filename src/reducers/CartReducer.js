const initialState = {
  products: [],
  address: [],
  discount: 0,
  delivery: 0,
};

export default (state = initialState, action) => {
  const returnState = { ...state };
  switch (action.type) {
    // case 'SET_TOKEN':
    //   returnState.token = action.payload.token;
    //   break;
    default:
      break;
  }

  return returnState;
};
