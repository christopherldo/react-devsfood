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
      const index = products.findIndex((item) => item.id === id);

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
    case 'CHANGE_PRODUCT': {
      let products = [...state.products];

      const { id } = action.payload;
      const index = products.findIndex((item) => item.id === id);

      switch (action.payload.type) {
        case '-':
          products[index].qt -= 1;

          if (products[index].qt === 0) products = products.filter((item, i) => i !== index);
          break;
        case '+':
          products[index].qt += 1;
          break;
        default:
          break;
      }

      returnState.products = products;
      break;
    }
    default:
      break;
  }

  return returnState;
};
