const initialState = {
  products: [],
  address: [],
  discount: 0,
  delivery: 0,
};

export default (state = initialState, action) => {
  const returnState = { ...state };
  switch (action.type) {
    case 'ADD_PRODUCT': {
      const products = [...state.products];

      const { id } = action.payload.data;
      const index = state.products.findIndex((item) => item.id === id);

      if (index !== -1) {
        products[index].qt += action.payload.qt;
      } else {
        products.push({
          ...action.payload.data,
          qt: action.payload.qt,
        });
      }

      returnState.products = products;
      break;
    }
    // case 'SET_TOKEN':
    //   returnState.token = action.payload.token;
    //   break;
    default:
      break;
  }

  return returnState;
};
